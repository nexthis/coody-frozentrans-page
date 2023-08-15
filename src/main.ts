import "./style/main.scss"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import flatpickr from "flatpickr";
import { Polish } from "flatpickr/dist/l10n/pl"
import { english } from "flatpickr/dist/l10n/default"


window.addEventListener("load", () => {
    const elements = document.querySelectorAll<HTMLInputElement>('.flatpickr')
    alert("XD")

    for (const item of elements) {
        const en = item.classList.contains("en")
        let config = { time_24hr: true, locale: en ? english : Polish, minDate: "today", inline: true} ;
        try{
            config = {...config, ...JSON.parse(item.dataset.flatpickr ?? "")};
        }
        catch(e){
            console.log();
        }
        flatpickr(item, config);
    }

})
