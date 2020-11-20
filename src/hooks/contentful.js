import { useEffect, useState } from 'react'
const contentful = require('contentful')

export function useContent(type) {
  const [content, setContent] = useState()

  useEffect(() => {
    const contentfulClient = contentful.createClient({
      accessToken: 'BKLnaJIpWahpLRYL-Kkdo-4pKIbk7ZdpEtnhE_a5OWw',
      space: 'zor54q0p6zdj',
    })

    contentfulClient
      .getEntries({
        content_type: type,
      })
      .then((entries) => {
        setContent(entries.items)
      })
  }, [type])

  return content
}
