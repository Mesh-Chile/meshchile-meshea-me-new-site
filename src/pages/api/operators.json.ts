import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async () => {
  const operators = await getCollection('operators')

  const data = operators.map(op => {
    const d = op.data
    const prec = d.location.precision

    const coords =
      (prec === 'exact' || prec === 'approximate') && d.location.coords
        ? d.location.coords
        : null

    const contact: Record<string, string> = {}
    if (d.contact.telegram) contact.telegram = d.contact.telegram
    if (d.contact.foro)     contact.foro     = d.contact.foro
    if (d.contact.website)  contact.website  = d.contact.website
    if (d.contact.discord)  contact.discord  = d.contact.discord

    const nodes = (d.nodes ?? []).map(n => ({
      shortName: n.shortName,
      longName:  n.longName,
      hardware:  n.hardware,
      role:      n.role,
      framework: n.framework,
      active:    n.active,
    }))

    return {
      id:          op.id,
      displayName: d.displayName,
      alias:       d.alias ?? [],
      location: {
        region:    d.location.region,
        commune:   d.location.commune ?? null,
        precision: prec,
        coords,
      },
      frameworks: d.frameworks,
      role:       d.role,
      nodes,
      contact,
      availability: {
        dmOpen:          d.availability.dmOpen,
        helpsNewcomers:  d.availability.helpsNewcomers,
        covers:          d.availability.covers ?? [],
      },
      joinedAt: d.joinedAt,
      tags:     d.tags,
    }
  })

  return new Response(JSON.stringify({ operators: data }, null, 2), {
    headers: {
      'Content-Type':                'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control':               'public, max-age=3600',
    },
  })
}
