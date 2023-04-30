// ======= globals ============================================
const converter = {
    area: {
        name: 'Area',
        units: {
            squareKm: "Square Kilometer",
            squareM: "Square Meter",
            squareMile: "Square Mile",
            squareYard: "Square Yard",
            squareFoot: "Square Foot",
        },
        variants: {
            'squareKm:squareM': {
                formula: 'Multiple the area value by 1e+6',
                calculation(n) {
                    return n * new Number('1e+6');
                }
            },
            'squareKm:squareMile': {
                formula: 'Divided the area value by 2.59',
                calculation(n) {
                    return n / new Number('2.59');
                }
            },
            'squareKm:squareYard': {
                formula: 'Multiple the area value by 1.196e+6 ',
                calculation(n) {
                    return n * new Number('1.196e+6');
                }
            },
            'squareKm:squareFoot': {
                formula: 'for an approximate result, multiply the area value by 1.076e+7',
                calculation(n) {
                    return n * new Number('10.764');
                }
            },
         
            'squareM:squareKm': {
                formula: 'Divide the area value by 1e+6 ',
                calculation(n) {
                    return n / new Number('1e+6');
                }
            },
            'squareM:squareMile': {
                formula: 'Divided the area value by 2.59e+6',
                calculation(n) {
                    return n / new Number('2.59e+6');
                }
            },
            'squareM:squareYard': {
                formula: 'multiply the area value by 1.196',
                calculation(n) {
                    return n * new Number('1.196');
                }
            },
            'squareM:squareFoot': {
                formula: 'Multiple the area value by 10.764',
                calculation(n) {
                    return n * new Number('10.764');
                }
            },

            'squareMile:squareKm': {
                formula: 'Multiple the area value by 2.59',
                calculation(n) {
                    return n * new Number('2.59');
                }
            },
            'squareMile:squareM': {
                formula: 'Multiple the area value by 2.59e+6',
                calculation(n) {
                    return n * new Number('2.59e+6');
                }
            },
            'squareMile:squareYard': {
                formula: 'for an approximate result, multiply the area value by 3.098e+6',
                calculation(n) {
                    return n * new Number('3.098e+6');
                }
            },
            'squareMile:squareFoot': {
                formula: 'for an approximate result, multiply the area value by 2.788e+7',
                calculation(n) {
                    return n * new Number('2.788e+7');
                }
            },

            'squareYard:squareKm': {
                formula: 'Divided the area value by 1.196e+6',
                calculation(n) {
                    return n / new Number('1.196e+6');
                }
            },
            'squareYard:squareM': {
                formula: 'divide the area value by 1.196',
                calculation(n) {
                    return n / new Number('1.196');
                }
            },
            'squareYard:squareMile': {
                formula: 'for an approximate result, divide the area value by 3.098e+6',
                calculation(n) {
                    return n / new Number('3.098e+6');
                }
            },
            'squareYard:squareFoot': {
                formula: 'Dived the area value by 9',
                calculation(n) {
                    return n / new Number('9');
                }
            },

            'squareFoot:squareKm': {
                formula: 'for an approximate result, divide the area value by 1.076e+7',
                calculation(n) {
                    return n / new Number('1.076e+7');
                }
            },
            'squareFoot:squareM': {
                formula: 'Dived the area value by 10.764',
                calculation(n) {
                    return n / new Number('10.764');
                }
            },
            'squareFoot:squareMile': {
                formula: 'for an approximate result, divide the area value by 2.788e+7',
                calculation(n) {
                    return n / new Number('2.788e+7');
                }
            },
            'squareFoot:squareYard': {
                formula: 'Dived the area value by 9',
                calculation(n) {
                    return n / new Number('9');
                }
            },
        }
    },
    mass: {
        name: 'Mass',
        units: {
            tonne: "Tonne",
            kilogram: "Kilogram",
            gram: 'Gram',
            // milligram: "Milligram"
        },
        variants: {
            'tonne:kilogram' : {
                formula: 'Multiple the mass value by 1000',
                calculation(n) {
                    return n * new Number('1000');
                }
            },
            'tonne:gram' : {
                formula: 'Multiple the mass value by 1000000',
                calculation(n) {
                    return n * new Number('1000000');
                }
            },

            'kilogram:tonne': {
                formula: 'Divided the mass value by 1000',
                calculation(n) {
                    return n / new Number('1000');
                }
            },
            'kilogram:gram': {
                formula: 'Multiple the mass value by 1000',
                calculation(n) {
                    return n * new Number('1000');
                }
            },

            'gram:tonne': {
                formula: 'Divided the mass value by 1000000',
                calculation(n) {
                    return n / new Number('1000000');
                }
            },
            'gram:kilogram': {
                formula: 'Divided the mass value by 1000',
                calculation(n) {
                    return n / new Number('1000');
                }
            }
        }
    },
    length: {
        name: 'Length',
        units: {
            kilometer: "Kilometer",
            meter: "meter",
            centimeter: "Centimeter",
            // millimeter: "millimeter"
        },
        variants: {
            'kilometer:meter': {
                formula: 'Multiply the Length value by 1000',
                calculation(n) {
                    return n * new Number('1000');
                }
            },
            'kilometer:centimeter': {
                formula: 'Multiply the Length value by 100000',
                calculation(n) {
                    return n * new Number('100000');
                }
            },

            'meter:kilometer': {
                formula: 'Divided the Length value by 1000',
                calculation(n) {
                    return n / new Number('1000');
                }
            },
            'meter:centimeter': {
                formula: 'Multiply the Length value by 100',
                calculation(n) {
                    return n * new Number('100');
                }
            },

            'centimeter:kilometer': {
                formula: 'Divided the Length value by 100000',
                calculation(n) {
                    return n / new Number('100000');
                }
            },
            'centimeter:meter': {
                formula: 'Divided the Length value by 100',
                calculation(n) {
                    return n / new Number('100');
                }
            }
        }
    },
    time: {
        name: "time",
        units: {
            second: "Second",
            minute: "Minute",
            hour: "Hour",
            // day: "Day",
        },
        variants: {
            'second:minute': {
                formula: 'Divided the mass value by 60',
                calculation(n) {
                    return n / new Number('60');
                }
            },
            'second:hour': {
                formula: 'Divided the mass value by 3600',
                calculation(n) {
                    return n / new Number('3600');
                }
            },

            'minute:second': {
                formula: 'Multiply the mass value by 60',
                calculation(n) {
                    return n * new Number('60');
                }
            },
            'minute:hour': {
                formula: 'Divided the mass value by 60',
                calculation(n) {
                    return n / new Number('60');
                }
            },

            'hour:second': {
                formula: 'Multiply the mass value by 3600',
                calculation(n) {
                    return n * new Number('3600');
                }
            },
            'hour:minute': {
                formula: 'Multiply the mass value by 60',
                calculation(n) {
                    return n * new Number('60');
                }
            }
        }
    }
}
let lastLeftSelectValue = '';
let lastRightSelectValue = '';
let caller = null;

// ======= onload handler =====================================
window.onload = () => {
    main()
}



// ======= main/boot function =================================
function main() {
    // references-----------------
    const categorySelect = document.getElementById('category-select');
    const leftSelect = document.getElementById('left-select');
    const rightSelect = document.getElementById('right-select');
    const leftInput = document.getElementById('left-inp');
    const rightInput = document.getElementById('right-inp');
    const formulaTextDom =  document.getElementById('formula-text');


    //functions----------------

    // update category-select
    {
        let values = Object.keys(converter).sort();
        let texts = values.map(function(item){
            return converter[item].name;
        });

        addOptions(categorySelect,values,texts);
    }

    // update input-group-select
    updateInputGroupSelect(categorySelect,leftSelect,rightSelect);
    categorySelect.addEventListener('change',function(){
        updateInputGroupSelect(categorySelect,leftSelect,rightSelect);
        updateInputs(categorySelect,leftSelect,rightSelect);
    })
    leftSelect.addEventListener('change',function(event){
        if (event.target.value === rightSelect.value) {
            rightSelect.querySelector(`option[value="${lastLeftSelectValue}"`).selected = 'selected';
            lastRightSelectValue = rightSelect.value
        }
        lastLeftSelectValue = leftSelect.value
        updateInputs(categorySelect,leftSelect,rightSelect);
    });
    rightSelect.addEventListener('change',function(event){
        if (event.target.value === leftSelect.value) {
            leftSelect.querySelector(`option[value="${lastRightSelectValue}"`).selected = 'selected';
            lastLeftSelectValue = leftSelect.value
        }
        lastRightSelectValue = rightSelect.value
        updateInputs(categorySelect,leftSelect,rightSelect);
    });


    // update input
    document.getElementById('left-inp').value = 1;
    updateInputs(categorySelect,leftSelect,rightSelect,caller);
    leftInput.addEventListener('keyup',function(event){
        let caller = event.target
        if(event.target.value && !isNaN(event.target.value)) {
            updateInputs(categorySelect,leftSelect,rightSelect);
        } else { rightInput.value = ''}
    });
    rightInput.addEventListener('keyup',function(event){
        let caller = event.target
        if(event.target.value && !isNaN(event.target.value)) {
            updateInputs(categorySelect,leftSelect,rightSelect,caller);
        } else { leftInput.value = ''}
    })

}




// ======= event handlers =====================================




// ======= dom functions ======================================

function updateInputGroupSelect(categorySelect,leftSelect,rightSelect) {
    const category = categorySelect.value;
    const units = converter[category].units;
    
    let values = Object.keys(units);
    let texts = [];
    values.forEach(item => {
        texts.push(units[item]);
    })
    addOptions(leftSelect,values,texts);
    lastLeftSelectValue = leftSelect.value;

    addOptions(rightSelect,values,texts);
    rightSelect.getElementsByTagName('option')[1].selected = 'selected';
    lastRightSelectValue = rightSelect.value;
}

function updateInputs(categorySelect,leftSelect,rightSelect,caller) {
    const leftInput = document.getElementById('left-inp');
    const rightInput = document.getElementById('right-inp');
    const formulaTextDom =  document.getElementById('formula-text');

    let input = (caller) ? caller : leftInput;
    let inputSelect = (caller === rightInput) ? rightSelect : leftSelect;
    let output = (caller === rightInput) ? leftInput : rightInput;
    let outputSelect = (caller === rightInput) ? leftSelect : rightSelect;

    const category = categorySelect.value;
    const variants = converter[category].variants;
    const variantKey = `${inputSelect.value}:${outputSelect.value}`
    const formulaKey = `${leftSelect.value}:${rightSelect.value}`
    const formulaText =  variants[formulaKey].formula
    formulaTextDom.innerHTML = formulaText
    output.value = variants[variantKey].calculation(input.value);
}

/**
 * Add options to dom element
 * @param {Object} element 
 * @param {Array} values 
 * @param {Array} texts  
 */
function addOptions(element,values,texts) {
    element.innerHTML = "";
    for (let i = 0; i < values.length; i++) {
        addOption(element,values[i],texts[i])
    }
    function addOption(element,value,text) {
        let opt = document.createElement('option');
        opt.setAttribute('value', value);
        opt.innerText = text;
        element.appendChild(opt);
    }
}




// ======= utils function =====================================

