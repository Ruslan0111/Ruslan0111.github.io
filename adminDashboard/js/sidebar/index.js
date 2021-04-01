function createItem(item) {
    const aElement = document.createElement('a')
    aElement.classList.add('sidebar__link')

    if (item.isActive) {
        aElement.classList.add('active')
    }
    
    const svg = item.icon
    const spanElement = document.createElement('span')

    spanElement.innerText = item.label

    aElement.innerHTML = svg
    aElement.append(spanElement)

    return aElement
}

function loadItems() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('./js/sidebar/links.json')
            const items = await response.json()

            resolve(items)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

async function initSidebar() {
    const targetContainer = document.getElementById('main-sidebar')

    if (!targetContainer) return
    
    try {
        const items = await loadItems()
        
        for (const item of items) {
            const targetItem = createItem(item)

            targetContainer.append(targetItem)
        }
        
        handleSelectActiveElement()

    } catch (error) {
        console.log('fail loading json file', error)
    }
}

function handleSelectActiveElement() {
    let list = document.getElementsByClassName('sidebar__list');

    for (let i of list) {
        i.addEventListener('click', function(event) {
            if (!event.target.closest('.sidebar__link')) return;

            let activeElement = document.querySelector('.active');

            activeElement.classList.remove('active');
            event.target.closest('.sidebar__link').classList.add('active');
        })
    }
}

window.onload = function() {
    initSidebar()
}
