import { useState } from "react"
export default function useCountryFlag(item) {
    let iso2 = item.from.toLowerCase().slice(0, 2)
    const [urlFrom] = useState(`https://www.countryflags.io/${iso2}/flat/48.png`)
    iso2 = item.to.toLowerCase().slice(0, 2)
    const [urlTo] = useState(`https://www.countryflags.io/${iso2}/flat/48.png`)
    return [urlFrom, urlTo]
}