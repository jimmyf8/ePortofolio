<template>
  <div class="container-fluid col p-5">
    <div class="container">
      <img
        class="img-responsive"
        src="../assets/oc_logo-min.png"
        alt="Card image cap"
        style="max-width: 30%"
      />
    </div><br>
    <div class="container">
      <h2>
        Développeur Web, chez OpenClassrooms RNCP Développeur web bac +2 Paris
        (7 mois)
      </h2>
      <br />

      <p v-scrollanimation>
        Intégrer tous les éléments d’une maquette graphique en HTML5 et CSS
      </p>
      <p v-scrollanimation>Ajouter du contenu audio et vidéo en HTML5</p>
      <p v-scrollanimation>Animer les pages web avec CSS3</p>
      <p v-scrollanimation>
        Construire un site web responsive s’adaptant à tout type d’écran : pc,
        smartphone et tablette
      </p>
      <p v-scrollanimation>
        Améliorer le référencement naturel en utilisant les balises sémantiques
      </p>
      <p v-scrollanimation>
        Gérer les comptes utilisateurs de manière sécurisée
      </p>
      <p v-scrollanimation>Afficher, créer le contenu d’une base de données</p>
      <p v-scrollanimation>
        Faire réagir la page web en fonction des actions de l’utilisateur en
        JavaScript
      </p>
      <p v-scrollanimation>
        Se connecter à un service web pour exploiter des données API
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "oc",
};
</script>

<style lang="scss" scoped>
.container-fluid {
  max-height: 300vh;

  display: flex;
  flex-wrap: wrap;
  background: rgb(255, 255, 255);

}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>