const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemons.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");
    pokemonAtivoNaListagem.classList.remove("ativo");

    const idPokemonSelecionado = pokemon.attributes.id.value;
    const idCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;

    const cartaoPokemonParaAbrir = document.getElementById(
      idCartaoPokemonParaAbrir
    );
    cartaoPokemonParaAbrir.classList.add("aberto");
    pokemon.classList.add("ativo");
  });
});
