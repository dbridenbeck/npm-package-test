import * as React from "react"

type PerformantContentfulImageType = {
  whatever?: string
}

export const PerformantContentfulImage = ({whatever}: PerformantContentfulImageType) => {
  console.log({whatever})
  return <>
  <p>
    hi it's some stuffs
  </p>
  </>
}