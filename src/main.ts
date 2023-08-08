import "./style/main.scss"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import flatpickr from "flatpickr";
import { Polish } from "flatpickr/dist/l10n/pl"


const elements = document.querySelectorAll<HTMLInputElement>('[data-flatpickr]')


for (const item of elements) {
    let config = { time_24hr: true, locale: Polish, minDate: "today"} ;
    try{
        config = {...config, ...JSON.parse(item.dataset.flatpickr ?? "")};
    }
    catch(e){
        console.log();
    }
    flatpickr(item, config);
}
