const LIST = [
{
    id: 1,
    nome: 'Carl Johnson (CJ)',
    avatar: 'images/cj.png'
},
{
    id: 2,
    nome: 'Tommy Vercetti',
    avatar: 'images/tv.png'
},
{
    id: 3,
    nome: 'Claude',
    avatar: 'images/claude.png'
},
{
    id: 4,
    nome: 'Huang Lee',
    avatar: 'images/huang.png'
},
{
    id: 5,
    nome: 'Niko Bellic',
    avatar: 'images/niko.png'
},
{
    id: 6,
    nome: 'Michael De Santa',
    avatar: 'images/michael.png'
},
{
    id: 7,
    nome: 'Franklin Clinton',
    avatar: 'images/franklin.png'
},
{
    id: 8,
    nome: 'Trevor Phillips',
    avatar: 'images/trevor.png'
},
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Grand Theft Auto',
        userName: 'Alleson',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },
        search() {
            if(this.searchName === '') {
                return alert('O campo de busca é obrigatório')
            }
            const list = this.characters = LIST
            const result = list.filter(item =>{
                return item.nome === this.searchName
            })

            if(result.length <= 0) {
                alert('Nenhum registro encontrado')
            }

            this.characters = result
        },
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        }
    }
})