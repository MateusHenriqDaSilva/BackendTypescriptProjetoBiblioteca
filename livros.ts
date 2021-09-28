interface Livro {
    autor: string
    titulo: string
    numeroPaginas?: number
    jaFoiLido?: boolean
}
function mostrarLivro(livro: Livro) {
    console.log(`Autor: ${livro.autor}, titulo: ${livro.titulo}, numero de paginas? ${livro.numeroPaginas}`)
    if (livro.jaFoiLido !== undefined) {
        console.log(`Ja foi lido?: ${livro.jaFoiLido ? 'sim' : 'nao'}, esse livro`)
    }
}
function setPaginas(livro: Livro, paginas: number) {
    livro.numeroPaginas = paginas
}
function lerLivro(livro: Livro) {
    livro.jaFoiLido = true
}
const livro1: Livro = {
    autor: 'john micael',
    titulo: 'oFantasma',
    numeroPaginas: 100,
    jaFoiLido: false
}
const livro2: Livro = {
    autor: 'Leliane Silva',
    titulo: 'oCarroDeCorrida',
    numeroPaginas: 115,
    jaFoiLido: false
}
const livro3: Livro = {
    autor: 'Bruno e Marrone',
    titulo: 'oEscorpiao',
    numeroPaginas: 110,
    jaFoiLido: false
}

mostrarLivro(livro1)
setPaginas(livro1, 200)
mostrarLivro(livro1)
lerLivro(livro1)
mostrarLivro(livro1)

mostrarLivro(livro2)
setPaginas(livro2, 200)
mostrarLivro(livro2)
lerLivro(livro2)
mostrarLivro(livro2)

mostrarLivro(livro3)
setPaginas(livro3, 200)
mostrarLivro(livro3)