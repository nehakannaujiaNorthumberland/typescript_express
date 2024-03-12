// document.addEventListener('DOMContentLoaded', function(){
//     const list = document.getElementById('todo-list') as HTMLElement;
//     list?.addEventListener('click', function toggleComplete(ev: Event){
//        const target = ev.target as HTMLElement
//        const id =  target.getAttribute('data-item-id')
//        console.log(id)

//        fetch(`/click?id=${id}`)
//       .then(res => res.json())
//       .then(data => location.reload())
//       .catch(err => console.log("error msg"))

//      })
// })

function onClick(id: string){
    window.location.href =  `/click?id=${id}`

}
