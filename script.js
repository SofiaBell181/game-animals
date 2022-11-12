const area = document.querySelector('#inner_area');
const cell = document.querySelectorAll('.cell');

    let i = 0;

    cell.forEach(item => item.addEventListener('click', function getStart() {
        i++;
        if (item.classList = 'cell') {
            if (i % 2 === 0 ) {
                item.innerHTML = '<img src="dog.png" width="140px" alt="">';    
                }
            
            if (i % 2 !== 0 ) {
                item.innerHTML = '<img src="cat.png" width="140px" alt="">';   
            }

            item.removeEventListener('click', getStart);

            if (i===9) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Friendship won!',
                            customClass: 'swal-width',
                        })   
                        displayBtn();      
                        item.removeEventListener('click', getStart)      
                    }

                   
                    getWinner(item);       
                    item.removeEventListener('click', getStart)   
        }
    })) 
  

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
                    cell.forEach(item => item.style.pointerEvents='none')
                 
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
                    cell.forEach(item => item.style.pointerEvents='none')
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

