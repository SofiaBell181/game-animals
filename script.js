const area = document.querySelector('#inner_area');
const cell = document.querySelectorAll('#cell');

    let i = 0;

    area.addEventListener('click', getStart)

    function getStart(e) {
        if (e.target.className = 'cell') {
            i % 2 === 0 ? e.target.innerHTML = '<img src="dog.png" width="140px" alt="">' : e.target.innerHTML = '<img src="cat.png" width="140px" alt="">';
        }

        i++;

        if (i===9) {
            Swal.fire({
                icon: 'success',
                title: 'Friendship won!',
                customClass: 'swal-width',
            })   
            displayBtn();      
            area.removeEventListener('click', getStart)      
        }

        getWinner();
    }


        function getWinner() {
            let combs = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
    
            for (let i = 0; i<combs.length; i++) {

                if (cell[combs[i][0]].innerHTML === '<img src="dog.png" width="140px" alt="">'
                && cell[combs[i][1]].innerHTML === '<img src="dog.png" width="140px" alt="">' 
                && cell[combs[i][2]].innerHTML === '<img src="dog.png" width="140px" alt="">')
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Dog winner!',
                        customClass: 'swal-width'
                    });
                    displayBtn();
                    area.removeEventListener('click', getStart)
                }

                else if (cell[combs[i][0]].innerHTML === '<img src="cat.png" width="140px" alt="">'
                && cell[combs[i][1]].innerHTML === '<img src="cat.png" width="140px" alt="">' 
                && cell[combs[i][2]].innerHTML === '<img src="cat.png" width="140px" alt="">')
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Cat winner!',
                        customClass: 'swal-width'
                    }); 
                    displayBtn();
                    area.removeEventListener('click', getStart)
                }
            
            }           
        }

        function displayBtn() {
            const btn = document.querySelector('#btn');
            btn.style.display = 'block';
            btn.addEventListener('click', () => {
                location.reload();
            })
        }

    gsap.from('#head', 1.5, {
        delay: 2, 
        y: -100,
        opacity: 0
    })

    gsap.from('#container', 1.5, {
        delay: 1.5, 
        y: -120,
        opacity: 0
    })
