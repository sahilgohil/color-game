const select = document.getElementById('mySelect')
const button = document.getElementById('btn')
const color = document.getElementById('color')

button.addEventListener('click',getColorScheme)

function getColorScheme()
{
    // console.log(`https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${select.options[select.selectedIndex].value}`)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${select.options[select.selectedIndex].value}`)
        .then(res => res.json())
        .then(data => 
        {
            let colorString = ''
            let colorsArray = []
            data.colors.forEach(function(color)
            {
                colorsArray.push(color.hex.value)
                colorString +=`<section class="color-outer">
                                    <section class="color-container">
                                    </section>
                                    <h3>${color.hex.value}</h3>
                                </section>`          
            })
            document.getElementById('main').innerHTML = colorString
             const colorElements = document.getElementsByClassName('color-container')
             Object.keys(colorElements).forEach(function(element)
             {
                colorElements[element].style.backgroundColor = colorsArray[element]   
             })
            
        })
}

