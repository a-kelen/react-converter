import axios from 'axios'
import { useState } from "react"
export default function useCountryFlag(item) {
    const [value, setValue] = useState(0)
    var options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: {to: 'MYR', from: 'SGD', q: '1.0'},
        headers: {
          'x-rapidapi-key': 'd6b9f24fd6msh74510b375eda4e5p1d0ef3jsnaa5e004726cc',
          'x-rapidapi-host': 'currency-exchange.p.rapidapi.com'
        }
      };
      function get(from, to) {
        options.params = {to, from, q: '1.0'}
         return axios.request(options).then(function (response) {
            setValue(response.data)
        }).catch(function (error) {
            console.error(error);   
        });
        }
    return [value, get]
}

