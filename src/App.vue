<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed right temporary app>
            <v-list dense>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>card_giftcard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Products</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>archive</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Plugins Hub</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>save</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Resources</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>group_add</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Partners</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>account_balance</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Company</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>mic</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Blog</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>contact_mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Contact</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-for="(admin, i) in admins" :key="i" @click="" class="ml-5 pl-2">
                    <v-list-tile-action>
                        <v-icon v-text="admin[1]"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile>
                        <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                    </v-list-tile>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="primary contained" dark>
            <v-container class="my-0 mx-auto py-0">
                <v-layout>
                    <v-toolbar-title align-center class="pt-2"><img src="public/kong-official-logo.svg" /></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                    <v-toolbar-items class="hidden-md-and-down">
                        <v-btn flat class="white--text">products</v-btn>
                        <v-btn flat class="white--text">plugin hub</v-btn>
                        <v-btn flat class="white--text">resources</v-btn>
                        <v-btn flat class="white--text">partners</v-btn>
                        <v-btn flat class="white--text">company</v-btn>
                        <v-btn flat class="white--text">blog</v-btn>
                        <v-btn small outline class="secondary">request demo</v-btn>
                        <v-btn small depressed class="secondary ml-3">installation</v-btn>
                    </v-toolbar-items>
                </v-layout>
            </v-container>
        </v-toolbar>
        <v-content>
            <v-toolbar class="hidden-md-and-down">
                <v-container class="mx-auto my-0 py-0">
                    <v-layout row>
                        <v-flex class="pt-3">
                            <v-toolbar-title>Company</v-toolbar-title>
                        </v-flex>
                        <v-tabs right color="transparent" height="63px">
                            <v-tab href="#one">About</v-tab>
                            <v-tab href="#two">Investors</v-tab>
                            <v-tab href="#three">Jobs</v-tab>
                            <v-tab href="#four">Contact</v-tab>
                            <v-tabs-slider color="primary"></v-tabs-slider>
                        </v-tabs>
                    </v-layout>
                </v-container>
            </v-toolbar>

            <v-container fluid pa-0 class="banner">
                <v-layout>
                    <v-flex>
                        <v-card height="90vh" flat>
                            <v-card-media height="100%">
                                <v-container class="banner-callout fade-in" mt-0>
                                    <v-layout row align-start justify-start pt-5>
                                        <v-flex sm8>
                                            <h1>Are you ready to join the API revolution?</h1>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row align-start justify-start>
                                        <v-flex pl-2>
                                            <v-btn right large color="success" class="mt-4">See Open Positions</v-btn>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row align-start justify-start>
                                        <v-flex>
                                            <div item class="mt-2">
                                                <h5>Not ready to apply? <a class="success-link" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwirlZndjP3cAhUQFnwKHfIeB6AQFjAAegQIBRAC&url=https%3A%2F%2Fkonghq.com%2F&usg=AOvVaw1KKDfLVIqwBO2iQ5Fu5XwV">Keep in touch</a></h5>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                                <v-container banner-images fluid absolute class="fade-in">
                                    <img class="obj" src="public/banner/woman-on-phone-01.svg" />
                                    <img class="obj" src="public/banner/small-plant.svg" />
                                    <img class="obj" src="public/banner/woman-relaxing.svg" />
                                    <img class="obj" src="public/banner/television.svg" />
                                    <img class="obj" src="public/banner/man-06.svg" />
                                    <img class="obj" src="public/banner/man-03.svg" />
                                    <img class="obj" src="public/banner/woman-03.svg" />
                                    <img class="obj" src="public/banner/girl-01.svg" />
                                    <img class="obj" src="public/banner/woman-02.svg" />
                                    <img class="obj" src="public/banner/medium-desk.svg" />
                                    <img class="obj" src="public/banner/woman-04.svg" />
                                    <img class="obj" src="public/banner/man-05.svg" />
                                    <img class="obj" src="public/banner/man-07.svg" />
                                    <img class="obj" src="public/banner/kong-tree.svg" />
                                    <img class="obj" src="public/banner/small-desk.svg" />
                                    <img class="obj" src="public/banner/woman-01.svg" />
                                    <img class="obj" src="public/banner/lady-in-chair-01.svg" />
                                    <img class="obj" src="public/banner/woman-05.svg" />
                                    <img class="obj" src="public/banner/group-01.svg" />
                                    <img class="obj" src="public/banner/man-02.svg" />
                                    <img class="obj" src="public/banner/man-04.svg" />
                                    <img class="obj" src="public/banner/large-desk.svg" />
                                    <img class="obj kong-man" src="public/banner/man-01.svg" />
                                </v-container>
                            </v-card-media>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container fluid pa-0>
                <v-layout row>
                    <v-flex>
                        <!-- https://ssense.github.io/vue-carousel/ -->
                        <div class="slider">
                            <div>
                                <img src="public/the-city.jpg" />
                            </div>
                            <div>
                                <img src="public/the-girls.jpg" />
                            </div>
                            <div>
                                <img src="public/the-guys.jpg" />
                            </div>
                            <div>
                                <img src="public/kong-more-of-the-guys.png" />
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container class="mission fluid">
                <v-layout px-5 ma-5 fill-height>
                    <v-container>
                        <v-layout class="max-width fade-in" align-space-around justify-center column>
                            <v-flex class="mb-5 pb-5">
                                <h5 class="text-xs-center mb-3">who we are</h5>
                                <p class="text-xs-center">We are a group of makers, thinkers, and doers focused on helping today’s developers build tomorrow’s technology. Our teams work on the bleeding edge of API innovation to provide our users with a central nervous system for data and services.</p>
                                <p class="text-xs-center" id="inview">We believe in the power of Open Source and everything it stands for. That’s why developers around the world enthusiastically contribute on top of our open-source platform.</p>
                            </v-flex>

                            <v-flex>
                                <img class="hidden mt-5 pt-5" src="public/developers-making-the-product.svg" />
                            </v-flex>

                            <v-flex>
                                <h6 class="text-xs-center fade-in">We put design at the heart of everything we do, and we’re relentlessly focused on creating beautiful experiences for our customers. That’s why technology companies, major banks, e-commerce innovators, and government agencies put -name- in front of their most important web applications.</h6>
                            </v-flex>

                            <v-flex class="fade-in">
                                <v-layout row id="counter" mt-5>
                                    <v-flex xs4 text-xs-center>
                                        <span class="counter-value" data-count="200">0</span><span class="ref">K</span>
                                        <h6>Metrics</h6>
                                    </v-flex>
                                    <v-flex xs4 text-xs-center>
                                        <span class="counter-value" data-count="12">0</span><span class="ref">K</span>
                                        <h6>Metrics</h6>
                                    </v-flex>
                                    <v-flex xs4 text-xs-center>
                                        <span class="counter-value" data-count="3">0</span><span class="ref">M</span>
                                        <h6>Metrics</h6>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
        admins: [
            ['About', 'people'],
            ['Investors', 'attach_money'],
            ['Jobs', 'work'],
            ['Contact', 'contact_support']
        ]
    }),
    props: {
      source: String
    }
  }
</script>

<style lang="scss" scoped>


// variables
$xs: "only screen and (max-width: 600px)";
$sm: "only screen and (max-width: 959px)";
$md: "only screen and (min-width: 960px)";
$lg: "only screen and (min-width: 1264px)";
$xl: "only screen and (min-width: 1904px)";
p {
    font-size: 27px;
}
a {
    text-decoration: none;
}

// typography
h1 {
    font-size: 61px;
    line-height: 77px;
    font-weight: 400;
    @media #{$xs} {
        font-size: 38px;
    }
    @media #{$md} {
        font-size: 51px;
    }
    @media #{$xl} {
        font-size: 71px;
    }
}
h5 {
    font-size: 15px;
    font-weight: 400;
}
h6 {
    font-size: 17px;
    font-weight: 400;
}

// colors
.tertiary-color {
    background: #004B80
}
.success-link {
    color: #4caf50;
}

// toolbar
.v-toolbar>div {
    margin: auto;
    max-width: 1185px;
}
.v-toolbar {
    z-index: 8;
}

// side nav on top
aside.v-navigation-drawer  {
    z-index: 9;
}

// bring the callout forward
.banner-callout {
    z-index: 7;
}

// banner background images
.banner-images {
    position: absolute;
    height: 100vh;
    z-index: 2;
    img.obj {
        position: relative;
        width: 4%;
        &:nth-child(1) {
            left: 0;
            top: 20%;
            animation: ladywithcoffee 10s ease-in-out .5s 1 normal forwards;;
        }
        &:nth-child(2) {
              transform: translate(1vw, 35vh);
        }
        &:nth-child(3) {
              transform: translate(1.5vw, 36vh);
        }
        &:nth-child(4) {
              width: 9%;
              transform: translate(-3vw, 43vh);
        }
        &:nth-child(5) {
              transform: translate(2vw, 43vh);
              width: 3%;
        }
        &:nth-child(6) {
            transform: translate(4vw, 34vh);
            width: 3.5%;
        }
        &:nth-child(7) {
              transform: translate(3vw, 44vh);
              width: 3%;
        }
        &:nth-child(8) {
              transform: translate(4vw, 35vh);
              width: 3%;
        }
        &:nth-child(9) {
            transform: translate(6vw, 38vh);
            width: 3%;
        }
        &:nth-child(10) {
            transform: translate(5vw, 38vh);
            width: 19%;
        }
        &:nth-child(11) {
            transform: translate(-10vw, 51vh);
            width: 3%;
        }
        &:nth-child(12) {
            transform: translate(-3vw, 26vw);
            width: 2.5%;
        }
        &:nth-child(13) {
            transform: translate(0, 24vw);
            width: 3.5%;
        }
        &:nth-child(14) {
            transform: translate(-9vw, 3vw);

            width: 5.5%;
        }
        &:nth-child(15) {
            transform: translate(-10vw, 8vw);

            width: 11%;
        }
        &:nth-child(16) {
            transform: translate(-15vw, -2vw);

            width: 3%;
        }
        &:nth-child(17) {
            top: 26%;
            left: -21%;
            animation: ladyinchair 10s ease-in-out .5s infinite;
            animation-direction: normal;
        }
        &:nth-child(18) {
              transform: translate(-19vw, 21vw);

        }
        &:nth-child(19) {
            transform: translate(73vw, -12vw);

            width: 14%;
        }
        &:nth-child(20) {
              transform: translate(60vw, 5vw);

        }
        &:nth-child(21) {
              transform: translate(58vw, 15vw);

        }
        &:nth-child(22) {
              transform: translate(57vw, 5vw);

              width: 19%;
        }
        &:nth-child(23) {
            width: 3%;
            top: -204px;
            left: 90%;
            animation: paceinplace 8s ease-in-out .2s infinite;
            animation-direction: normal;
        }
    }
}

// animation keyframes
@keyframes ladywithcoffee {
    0% {
        top: 20%;
        left: 0;
    }
    12.5% {
        transform: rotate(220deg);
    }
    25% {
    transform: rotate(248deg);
         left: 7%;
         top: 27%;
    }
    37.5% {
        transform: rotate(166deg);
    }
    50% {
        left: 14%;
        top: 25%;
    }
    62.5% {
        transform: rotate(225deg);
    }
    75% {
        left: 25%;
        top: 38%;
    }
    87.5% {
        left: 25%;
        top: 38%;
        transform: rotate(225deg);
    }
    100% {
        left: 25%;
        top: 38%;
        transform: rotate(225deg);
    }
}

@keyframes ladyinchair {
  0% {
    transform: rotate(0deg); //first turn
    top: 26%;
    left: -21%;
  }
  16% {
      transform: rotate(-33deg); //first turn
      top: 26%;
      left: -21%;
  }
  32% {
      transform: rotate(180deg); // big roll
      top: 1%;
      left: -43%;
  }
  48% { // roll back
      top: 26%;
      left: -21%;
  }
  64% {
      transform: rotate(0deg); //
      top: 26%;
      left: -21%;
  }
  80% {
      transform: rotate(0deg); //
      top: 26%;
      left: -21%;
  }
  100% {
      transform: rotate(0deg); //
      top: 26%;
      left: -21%;
  }
}

@keyframes paceinplace {
  0% {
    transform: rotate(185deg); //first turn
    top: -16%;
    left: 48%;
  }
  16% {
    transform: rotate(185deg); //walk to spot
    left: 43%;
  }
  32% {
    transform: rotate(185deg); // look at table
    left: 43%;
  }
  48% {
    transform: rotate(90deg); // turn back
    left: 45%;
  }
  64% {
      transform: rotate(45deg); // walk to original spot
      left: 48%;
  }
  80% {
      transform: rotate(90deg); // turn to orignal direction
      left: 48%;
  }
  100% {
      transform: rotate(185deg); // original spot
      top: -16%;
      left: 48%;
  }
}

// keep the slider smaller
.slider img {
    max-height: 500px;
}

// slow fade in
.fade-in {
  opacity: 0;
  -moz-transition: all 1200ms ease-out;
  -webkit-transition: all 1200ms ease-out;
  -o-transition: all 1200ms ease-out;
  transition: all 1200ms ease-out;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

.fade-in.in-view {
  opacity: 1;
}

.mission {
    background: url("/public/developers-making-the-product.svg"), url("/public/thought-flow-left.svg"), url("/public/thought-flow-right.svg");
    background-size: auto, 50%, 50%;
    background-position: center, left center, right center;
    background-repeat: no-repeat;
    // animation: brainwaves 2s;
    .max-width {
        max-width: 900px;
        margin: auto;
    }
}

// for the counter
.counter-value,
.ref {
    font-size: 55px;
}

#counter > .flex:nth-child(n+2) {
    border-left: solid 2px #979797;
}

// keep it hidden
.hidden {
    opacity: 0;
}

</style>
