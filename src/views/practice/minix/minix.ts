import { ref } from "vue"

export default function () {
    let x = ref(2)

    let changeOn = () => {
        x.value += 1
    }


    return {
        x, changeOn
    }

}