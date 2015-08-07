//
// Pings the app around the rate of Force in production (30 rps)
//

var URLS = [
  "https://m-staging.artsy.net/artwork/tara-mcpherson-the-days-eye-trance-2",
  "https://m-staging.artsy.net/artwork/amber-george-plaided",
  "https://m-staging.artsy.net/artwork/tim-biskup-follow-me",
  "https://m-staging.artsy.net/artwork/alex-wood-boiling-point",
  "https://m-staging.artsy.net/artwork/dike-blair-untitled-9",
  "https://m-staging.artsy.net/artwork/kentaro-hiramatsu-park-12-r",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-composition-no-14-just-venus-again",
  "https://m-staging.artsy.net/artwork/dirk-bach-adrift-vii",
  "https://m-staging.artsy.net/artwork/jeff-brouws-railroad-landscape-number-3-poughkeepsie-and-eastern-right-of-way-abandoned-1938-mp-92-view-south-sprint-mcintyre-new-york",
  "https://m-staging.artsy.net/artwork/titi-freak-traido",
  "https://m-staging.artsy.net/artwork/henry-rothman-untitled-map",
  "https://m-staging.artsy.net/artwork/julie-blackmon-loading-zone",
  "https://m-staging.artsy.net/artwork/elisa-sighicelli-untitled-empty-square",
  "https://m-staging.artsy.net/artwork/ed-ruscha-music",
  "https://m-staging.artsy.net/artwork/fumiko-toda-memory",
  "https://m-staging.artsy.net/artwork/cecily-brown-untitled-18",
  "https://m-staging.artsy.net/artwork/lucia-warck-meister-bronx-beach-ii",
  "https://m-staging.artsy.net/artwork/nouar-hot-diggity-dog",
  "https://m-staging.artsy.net/artwork/david-smith-ds-2-22-56",
  "https://m-staging.artsy.net/artwork/michael-price-the-barberini-faun",
  "https://m-staging.artsy.net/artwork/paul-resika-untitled-lighthouse",
  "https://m-staging.artsy.net/artwork/jeff-soto-storm-clouds-for-slinky",
  "https://m-staging.artsy.net/artwork/kim-luttrell-marilyn",
  "https://m-staging.artsy.net/artwork/phil-frost-untitled-37",
  "https://m-staging.artsy.net/artwork/carolyn-monastra-holl-house",
  "https://m-staging.artsy.net/artwork/maria-passarotti-caravan",
  "https://m-staging.artsy.net/artwork/anne-tabachnick-autumn-sky",
  "https://m-staging.artsy.net/artwork/laurent-millet-calmez-vous-mr-kant",
  "https://m-staging.artsy.net/artwork/julie-blackmon-concert",
  "https://m-staging.artsy.net/artwork/vera-lutter-basel-uferstrasse-ii-january-15-17-2001",
  "https://m-staging.artsy.net/artwork/jeff-koons-couple-dots-ii",
  "https://m-staging.artsy.net/artwork/louis-kahn-gabled-manor-england",
  "https://m-staging.artsy.net/artwork/john-dubrow-alix",
  "https://m-staging.artsy.net/artwork/luis-maldonado-seasonal-winter",
  "https://m-staging.artsy.net/artwork/silvina-mamani-run-away-in-my-mind",
  "https://m-staging.artsy.net/artwork/holly-andres-the-el-camino-incident",
  "https://m-staging.artsy.net/artwork/dave-cooper-mangle-panel-a",
  "https://m-staging.artsy.net/artwork/holly-andres-the-magic-elixir",
  "https://m-staging.artsy.net/artwork/andy-warhol-retrospective-reversal-series",
  "https://m-staging.artsy.net/artwork/joe-deal-sinkhole-pecos-valley",
  "https://m-staging.artsy.net/artwork/wk-christ",
  "https://m-staging.artsy.net/artwork/paul-resika-boats-at-the-pier",
  "https://m-staging.artsy.net/artwork/kim-luttrell-where-are-we-going",
  "https://m-staging.artsy.net/artwork/louie-cordero-magnolvelzum",
  "https://m-staging.artsy.net/artwork/dirk-bach-otani-kabuki-za",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-the-cherry-blossom-trance-2",
  "https://m-staging.artsy.net/artwork/louise-kruger-untitled-woman",
  "https://m-staging.artsy.net/artwork/ellen-gallagher-watery-ecstatic-series-2",
  "https://m-staging.artsy.net/artwork/stephan-doitschinoff-calma-ad-astra-per-aspera",
  "https://m-staging.artsy.net/artwork/roy-lichtenstein-still-life-with-cabbage",
  "https://m-staging.artsy.net/artwork/dirk-bach-surveyors-petition",
  "https://m-staging.artsy.net/artwork/michael-kenna-flying-bird-over-san-marco-venice-italy",
  "https://m-staging.artsy.net/artwork/wk-anthony",
  "https://m-staging.artsy.net/artwork/kim-luttrell-sight-of-beauty-and-the-expectation-of-what-we-see-to-be-beauty-number-2",
  "https://m-staging.artsy.net/artwork/eve-aschheim-untitled",
  "https://m-staging.artsy.net/artwork/wijnanda-deroo-cafe-des-artistes-1-west-67th-street",
  "https://m-staging.artsy.net/artwork/jim-houser-family-tree",
  "https://m-staging.artsy.net/artwork/dirk-bach-luge-calme-et-volupte-ii",
  "https://m-staging.artsy.net/artwork/dave-cooper-testical-sky-study",
  "https://m-staging.artsy.net/artwork/jenny-saville-reflective-flesh",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-coruscate",
  "https://m-staging.artsy.net/artwork/lisa-breslow-central-park-lake-9",
  "https://m-staging.artsy.net/artwork/rosemarie-beck-house-of-the-sun-iii",
  "https://m-staging.artsy.net/artwork/david-vestal-east-59th-street-from-automat-cafeteria-nyc",
  "https://m-staging.artsy.net/artwork/camille-rose-garcia-why-dont-you-try-the-blue-pill",
  "https://m-staging.artsy.net/artwork/franz-west-untitled-2008",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-the-bunny-in-the-moon",
  "https://m-staging.artsy.net/artwork/dirk-bach-kays-basket",
  "https://m-staging.artsy.net/artwork/anne-sherwood-pundyk-sharpshooter",
  "https://m-staging.artsy.net/artwork/rachelle-krieger-winter-approaching",
  "https://m-staging.artsy.net/artwork/lucia-warck-meister-bronx-beach-1",
  "https://m-staging.artsy.net/artwork/donna-sharrett-before-something-else-happens-the-52nd-memento",
  "https://m-staging.artsy.net/artwork/robert-hite-mud-flat-house",
  "https://m-staging.artsy.net/artwork/andy-warhol-reflected-zeitgeist-series",
  "https://m-staging.artsy.net/artwork/robin-friend-untitled",
  "https://m-staging.artsy.net/artwork/helen-miranda-wilson-february-5-2004",
  "https://m-staging.artsy.net/artwork/henry-rothman-untitled-black-white-and-yellow",
  "https://m-staging.artsy.net/artwork/audrey-kawasaki-asobiba-playground",
  "https://m-staging.artsy.net/artwork/philip-taaffe-sanarac",
  "https://m-staging.artsy.net/artwork/takashi-murakami-bokan-camouflage-pink-2",
  "https://m-staging.artsy.net/artwork/janet-malcolm-burdock-no-21",
  "https://m-staging.artsy.net/artwork/gary-baseman-the-keeper-of-our-destiny",
  "https://m-staging.artsy.net/artwork/carolyn-monastra-wonderglass",
  "https://m-staging.artsy.net/artwork/rosemarie-beck-robert",
  "https://m-staging.artsy.net/artwork/susannah-phillips-rusty-knife",
  "https://m-staging.artsy.net/artwork/kim-luttrell-john",
  "https://m-staging.artsy.net/artwork/sharon-horvath-black-bed",
  "https://m-staging.artsy.net/artwork/richard-serra-p-and-e-xiv",
  "https://m-staging.artsy.net/artwork/paul-resika-tower",
  "https://m-staging.artsy.net/artwork/susannah-phillips-interior-with-lamp-i-2008",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-17-intimations-of-immortality",
  "https://m-staging.artsy.net/artwork/chip-hooper-afternoon-fog-black-point-pacific-ocean",
  "https://m-staging.artsy.net/artwork/gustav-klimt-der-kuss-the-kiss",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-trapped-in-the-narcissus-gaze-part-two-3",
  "https://m-staging.artsy.net/artwork/kentaro-hiramatsu-p-1",
  "https://m-staging.artsy.net/artwork/julie-blackmon-portrait",
  "https://m-staging.artsy.net/artwork/tine-lundsfryd-transfer-ii",
  "https://m-staging.artsy.net/artwork/francisco-jose-de-goya-y-lucientes-the-third-of-may-the-execution-of-spanish-insurgents-by-napoleonic-troops-under-general-murat-on-principe-pio-hill-madrid-may-3-1808",
  "https://m-staging.artsy.net/artwork/esao-andrews-masked-nemeans",
  "https://m-staging.artsy.net/artwork/tim-biskup-untitled",
  "https://m-staging.artsy.net/artwork/amber-george-sew-sew",
  "https://m-staging.artsy.net/artwork/jeff-soto-jakob",
  "https://m-staging.artsy.net/artwork/janet-malcolm-burdock-no-15",
  "https://m-staging.artsy.net/artwork/mary-mattingly-dry-season",
  "https://m-staging.artsy.net/artwork/jeff-soto-volcano",
  "https://m-staging.artsy.net/artwork/erik-mark-sandberg-girl-with-hot-spring-fashion",
  "https://m-staging.artsy.net/artwork/james-isherwood-untitled-3",
  "https://m-staging.artsy.net/artwork/kay-walkingstick-sicilia",
  "https://m-staging.artsy.net/artwork/john-mack-los-cardencheros-torreon-coahuila-mexico",
  "https://m-staging.artsy.net/artwork/georges-dambier-marie-helene-arnaud-eden-roc-cap-dantibes-elle",
  "https://m-staging.artsy.net/artwork/jeff-brouws-ranch-house-cafe-vaughn-new-mexico",
  "https://m-staging.artsy.net/artwork/georges-dambier-suzy-parker-tulips",
  "https://m-staging.artsy.net/artwork/mary-mattingly-family-of-man",
  "https://m-staging.artsy.net/artwork/greg-drasler-hats",
  "https://m-staging.artsy.net/artwork/jim-houser-the-jargon-of-criminals",
  "https://m-staging.artsy.net/artwork/mark-tansey-snowman",
  "https://m-staging.artsy.net/artwork/james-isherwood-wedger",
  "https://m-staging.artsy.net/artwork/james-isherwood-eastender",
  "https://m-staging.artsy.net/artwork/elisa-sighicelli-iceland-blue-bed",
  "https://m-staging.artsy.net/artwork/souther-salazar-how-we-love-to-have-other-people-love-things-through-our-eyes",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-20-kundrys-bed-of-roses",
  "https://m-staging.artsy.net/artwork/joe-deal-view-albuquerque-new-mexico",
  "https://m-staging.artsy.net/artwork/james-marshall-dalek-untitled-number-13",
  "https://m-staging.artsy.net/artwork/dirk-bach-the-magician-iv",
  "https://m-staging.artsy.net/artwork/matthew-cusick-turning-japanese",
  "https://m-staging.artsy.net/artwork/anne-tabachnick-negril-series",
  "https://m-staging.artsy.net/artwork/audrey-kawasaki-hyakki-yakou-night-parade",
  "https://m-staging.artsy.net/artwork/titi-freak-untitled-1",
  "https://m-staging.artsy.net/artwork/camille-rose-garcia-hippo-baby-blood-storm",
  "https://m-staging.artsy.net/artwork/david-poppie-hum",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-the-snow-bride",
  "https://m-staging.artsy.net/artwork/theodoros-stamos-infinity-field-olympia-ii",
  "https://m-staging.artsy.net/artwork/rosemarie-beck-landscape",
  "https://m-staging.artsy.net/artwork/john-currin-purple-bra",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-10-delightful-discoveries",
  "https://m-staging.artsy.net/artwork/xiaoqing-ding-blue-ribbon",
  "https://m-staging.artsy.net/artwork/willard-boepple-w-3-09-dot-03-dot-10-h",
  "https://m-staging.artsy.net/artwork/william-bailey-doglio",
  "https://m-staging.artsy.net/artwork/josh-agle-shag-license-to-peep",
  "https://m-staging.artsy.net/artwork/michael-kenna-corridor-of-leaves-guastalla-emilia-romagna-italy",
  "https://m-staging.artsy.net/artwork/gregory-crewdson-untitled-57",
  "https://m-staging.artsy.net/artwork/julie-blackmon-lost-mitten",
  "https://m-staging.artsy.net/artwork/jongwang-lee-incarnation-iii",
  "https://m-staging.artsy.net/artwork/mike-kelley-hermaphrodite-war-victim",
  "https://m-staging.artsy.net/artwork/greg-drasler-wiggle-room-slash-penthouse",
  "https://m-staging.artsy.net/artwork/frank-hyder-two-directions",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-drawing-for-somewhere-under-the-rainbow-turquoise",
  "https://m-staging.artsy.net/artwork/titi-freak-angel",
  "https://m-staging.artsy.net/artwork/doze-green-taking-liberty",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-pink-apple-tree",
  "https://m-staging.artsy.net/artwork/jeff-brouws-one-squeeze-proves-bend-oregon",
  "https://m-staging.artsy.net/artwork/heather-boose-weiss-ushuaia",
  "https://m-staging.artsy.net/artwork/alberto-di-fabio-sinapsi-plus-cosmo",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-limb-over-water",
  "https://m-staging.artsy.net/artwork/john-mack-dusk-falls-on-revolution-avenue-in-the-boarder-city-of-tijuana-baja-california",
  "https://m-staging.artsy.net/artwork/rosemarie-beck-atlanta",
  "https://m-staging.artsy.net/artwork/jeff-soto-love-can-surpass-all-obstacles",
  "https://m-staging.artsy.net/artwork/tracy-silva-barbosa-impetus",
  "https://m-staging.artsy.net/artwork/kay-walkingstick-our-land-variation-ii",
  "https://m-staging.artsy.net/artwork/louise-kruger-untitled-man",
  "https://m-staging.artsy.net/artwork/esao-andrews-drifters",
  "https://m-staging.artsy.net/artwork/holly-andres-siblings-and-pet-chicken",
  "https://m-staging.artsy.net/artwork/andy-kehoe-a-welcome-to-coming-days",
  "https://m-staging.artsy.net/artwork/chip-hooper-sunset-bodega-bay-pacific-ocean",
  "https://m-staging.artsy.net/artwork/richard-wright-untitled-01-dot-02-dot-03",
  "https://m-staging.artsy.net/artwork/paul-resika-through-the-trees-evening",
  "https://m-staging.artsy.net/artwork/laurent-millet-ne-faites-pas-lenfant-mr-kant",
  "https://m-staging.artsy.net/artwork/richard-prince-the-moon",
  "https://m-staging.artsy.net/artwork/robert-hite-picket-house",
  "https://m-staging.artsy.net/artwork/roy-lichtenstein-still-life-with-clock-and-roses",
  "https://m-staging.artsy.net/artwork/mary-mattingly-awakening",
  "https://m-staging.artsy.net/artwork/tom-sachs-principal-flow-diagram",
  "https://m-staging.artsy.net/artwork/blek-le-rat-say-boo-to-the-boomen",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-searching-for-penguins-1",
  "https://m-staging.artsy.net/artwork/georg-baselitz-fridas-traum",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-fall-reflections",
  "https://m-staging.artsy.net/artwork/judy-glantzman-judith-and-holofernes",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-the-days-eye-lotus",
  "https://m-staging.artsy.net/artwork/dan-witz-mosh-pit-i",
  "https://m-staging.artsy.net/artwork/fumiko-toda-butterfly-away-black",
  "https://m-staging.artsy.net/artwork/camille-rose-garcia-royal-disorder-subterranean-invasion",
  "https://m-staging.artsy.net/artwork/tine-lundsfryd-sum",
  "https://m-staging.artsy.net/artwork/james-marshall-dalek-untitled-no-11",
  "https://m-staging.artsy.net/artwork/phil-frost-untitled-44",
  "https://m-staging.artsy.net/artwork/paul-fusco-untitled-june-8-1968",
  "https://m-staging.artsy.net/artwork/louie-cordero-cold-cuts",
  "https://m-staging.artsy.net/artwork/anne-tabachnick-orange-abstract-with-table-at-bottom",
  "https://m-staging.artsy.net/artwork/lucia-warck-meister-long-beach",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-the-cherry-blossom-trance-3",
  "https://m-staging.artsy.net/artwork/angela-acourt-new-spaces",
  "https://m-staging.artsy.net/artwork/dave-cooper-mangle-study",
  "https://m-staging.artsy.net/artwork/john-lees-apex",
  "https://m-staging.artsy.net/artwork/georges-dambier-dorian-leigh-au-normandi",
  "https://m-staging.artsy.net/artwork/sharon-horvath-diamond-triangle-3",
  "https://m-staging.artsy.net/artwork/rachel-whiteread-metallic-black-yellow",
  "https://m-staging.artsy.net/artwork/david-vestal-falling-snow-from-back-window-133-west-22nd-street-nyc",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-trapped-in-the-narcissus-gaze-part-two-4",
  "https://m-staging.artsy.net/artwork/anne-sherwood-pundyk-lindsay",
  "https://m-staging.artsy.net/artwork/tim-biskup-finished",
  "https://m-staging.artsy.net/artwork/judy-glantzman-red-dress",
  "https://m-staging.artsy.net/artwork/nicola-verlato-hellraiser",
  "https://m-staging.artsy.net/artwork/tine-lundsfryd-aster-v",
  "https://m-staging.artsy.net/artwork/holly-andres-the-missing-bird",
  "https://m-staging.artsy.net/artwork/kay-walkingstick-nez-perce-crossing-variation",
  "https://m-staging.artsy.net/artwork/tracy-silva-barbosa-punica-granatum",
  "https://m-staging.artsy.net/artwork/dirk-bach-special-delivery",
  "https://m-staging.artsy.net/artwork/georg-baselitz-winterzeit-3",
  "https://m-staging.artsy.net/artwork/philip-taaffe-spuma-lupi",
  "https://m-staging.artsy.net/artwork/louise-kruger-man-on-couch",
  "https://m-staging.artsy.net/artwork/john-mack-congregants-at-an-outdoor-mass-near-tiacochahuaya-oaxaca-mexico",
  "https://m-staging.artsy.net/artwork/nouar-milk-fed-veal",
  "https://m-staging.artsy.net/artwork/tracy-silva-barbosa-gelid-passaic",
  "https://m-staging.artsy.net/artwork/jim-houser-hexes",
  "https://m-staging.artsy.net/artwork/alex-gross-oblivion",
  "https://m-staging.artsy.net/artwork/rackstraw-downes-farm-buildings-near-the-rio-grande-under-the-barn-roof-am",
  "https://m-staging.artsy.net/artwork/titi-freak-waiting-for-you",
  "https://m-staging.artsy.net/artwork/fumiko-toda-path",
  "https://m-staging.artsy.net/artwork/paul-resika-white-cloud",
  "https://m-staging.artsy.net/artwork/james-marshall-dalek-untitled-g",
  "https://m-staging.artsy.net/artwork/erik-mark-sandberg-glamour-panel-5",
  "https://m-staging.artsy.net/artwork/bas-princen-car-beach",
  "https://m-staging.artsy.net/artwork/nouar-milkface-mindy",
  "https://m-staging.artsy.net/artwork/eric-white-massacre-of-the-innocents",
  "https://m-staging.artsy.net/artwork/anne-tabachnick-squares-edge-of-the-city-black-lacoon",
  "https://m-staging.artsy.net/artwork/david-smith-untitled-11",
  "https://m-staging.artsy.net/artwork/sharon-horvath-night-summer-three",
  "https://m-staging.artsy.net/artwork/georges-dambier-catherine-dune-du-pyla",
  "https://m-staging.artsy.net/artwork/kim-luttrell-lizard-king",
  "https://m-staging.artsy.net/artwork/gary-baseman-enlightened-chou-golden-book-green",
  "https://m-staging.artsy.net/artwork/tine-lundsfryd-untitled-5",
  "https://m-staging.artsy.net/artwork/andy-kehoe-holding-on-to-the-old-and-dying",
  "https://m-staging.artsy.net/artwork/larry-rivers-berdie",
  "https://m-staging.artsy.net/artwork/michael-price-before-time",
  "https://m-staging.artsy.net/artwork/mary-mattingly-mono-lake",
  "https://m-staging.artsy.net/artwork/alex-gross-jozaikai-purgatory",
  "https://m-staging.artsy.net/artwork/andy-warhol-robert-mapplethorpe",
  "https://m-staging.artsy.net/artwork/dave-cooper-procession",
  "https://m-staging.artsy.net/artwork/gary-baseman-morning-blossom",
  "https://m-staging.artsy.net/artwork/julie-blackmon-take-off",
  "https://m-staging.artsy.net/artwork/henry-rothman-untitled-ouest",
  "https://m-staging.artsy.net/artwork/andy-warhol-one-green-cow",
  "https://m-staging.artsy.net/artwork/wijnanda-deroo-delmonicos-56-beaver-street",
  "https://m-staging.artsy.net/artwork/matthew-cusick-red-and-blue",
  "https://m-staging.artsy.net/artwork/janet-malcolm-untitled-landscape",
  "https://m-staging.artsy.net/artwork/carolyn-monastra-the-corn-field",
  "https://m-staging.artsy.net/artwork/paul-resika-blue-wave",
  "https://m-staging.artsy.net/artwork/jake-berthot-red-point-form-for-brancusi",
  "https://m-staging.artsy.net/artwork/phil-frost-untitled-47",
  "https://m-staging.artsy.net/artwork/paul-resika-red-and-black",
  "https://m-staging.artsy.net/artwork/michael-kenna-giza-pyramids-study-6-cairo",
  "https://m-staging.artsy.net/artwork/leland-bell-temma-seated",
  "https://m-staging.artsy.net/artwork/john-dubrow-bleecker-playground",
  "https://m-staging.artsy.net/artwork/john-lees-bathtub",
  "https://m-staging.artsy.net/artwork/helen-miranda-wilson-cookie-apple-grapes-nuts",
  "https://m-staging.artsy.net/artwork/louis-kahn-granite-quarries-no-5b-aswan-egy",
  "https://m-staging.artsy.net/artwork/kay-walkingstick-finding-the-center-iv",
  "https://m-staging.artsy.net/artwork/jeff-brouws-night-window-los-angeles-california",
  "https://m-staging.artsy.net/artwork/ellen-gallagher-odalisque",
  "https://m-staging.artsy.net/artwork/jim-houser-snares",
  "https://m-staging.artsy.net/artwork/rembrandt-harmensz-van-rijn-the-company-of-frans-banning-cocq-and-willem-van-ruytenburch-the-night-watch",
  "https://m-staging.artsy.net/artwork/joe-deal-backyard-diamond-bar-california",
  "https://m-staging.artsy.net/artwork/jeff-koons-peg-leg",
  "https://m-staging.artsy.net/artwork/susannah-phillips-dark-still-life",
  "https://m-staging.artsy.net/artwork/richard-phillips-awake-into-myth",
  "https://m-staging.artsy.net/artwork/david-vestal-penn-station-glass-roofed-waiting-room-nyc",
  "https://m-staging.artsy.net/artwork/david-vestal-man-with-umbrella-rain-puddle-from-above-11-west-22nd-street-nyc",
  "https://m-staging.artsy.net/artwork/doze-green-untitled-03",
  "https://m-staging.artsy.net/artwork/paul-resika-abstraction-second-state",
  "https://m-staging.artsy.net/artwork/paul-resika-flowers-in-hawthornes-pitcher",
  "https://m-staging.artsy.net/artwork/leland-bell-morning",
  "https://m-staging.artsy.net/artwork/holly-andres-calvin",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-the-days-eye-trance-3",
  "https://m-staging.artsy.net/artwork/laurent-millet-ne-vous-fatiguez-pas-mr-kant",
  "https://m-staging.artsy.net/artwork/jongwang-lee-transmutation",
  "https://m-staging.artsy.net/artwork/ed-ruscha-levitated-hope",
  "https://m-staging.artsy.net/artwork/paul-resika-untitled-boat-group-black-and-red",
  "https://m-staging.artsy.net/artwork/dave-cooper-four-in-a-car-study",
  "https://m-staging.artsy.net/artwork/jim-houser-crush-bones",
  "https://m-staging.artsy.net/artwork/jeff-brouws-ice-cream-booth-ventura-ca",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-composition-no-6-mirror-like-annunciation",
  "https://m-staging.artsy.net/artwork/anne-tabachnick-blue-quilt-mcdowell",
  "https://m-staging.artsy.net/artwork/eve-aschheim-in-time",
  "https://m-staging.artsy.net/artwork/david-vestal-flatiron-building-night-from-26th-street-nyc",
  "https://m-staging.artsy.net/artwork/louie-cordero-vlanderkrust",
  "https://m-staging.artsy.net/artwork/matthew-cusick-crown-of-creation",
  "https://m-staging.artsy.net/artwork/chip-hooper-mendocino-county-coast-pacific-ocean",
  "https://m-staging.artsy.net/artwork/joe-deal-untitled-view-boulder-city",
  "https://m-staging.artsy.net/artwork/eve-aschheim-upsurge-mist",
  "https://m-staging.artsy.net/artwork/dave-cooper-mangle-panel-b",
  "https://m-staging.artsy.net/artwork/paul-resika-sleeping-with-the-moon",
  "https://m-staging.artsy.net/artwork/josh-agle-shag-self-portrait-with-black-liquid",
  "https://m-staging.artsy.net/artwork/stephan-doitschinoff-calma-ragnarok",
  "https://m-staging.artsy.net/artwork/paul-resika-red-nude-night",
  "https://m-staging.artsy.net/artwork/jake-berthot-icarus",
  "https://m-staging.artsy.net/artwork/maria-passarotti-allerton",
  "https://m-staging.artsy.net/artwork/jeff-soto-car-crash",
  "https://m-staging.artsy.net/artwork/donna-sharrett-long-may-you-run",
  "https://m-staging.artsy.net/artwork/richard-serra-solid-number-13",
  "https://m-staging.artsy.net/artwork/ellen-gallagher-counterfeit",
  "https://m-staging.artsy.net/artwork/elisa-sighicelli-untitled-flower-pot",
  "https://m-staging.artsy.net/artwork/richard-prince-christmas",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-the-death-of-boto-2",
  "https://m-staging.artsy.net/artwork/michael-craig-martin-cassette",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-over-flow",
  "https://m-staging.artsy.net/artwork/dirk-bach-thunder-on-the-mountain",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-5-memory-shadow-and-the-unimaginable",
  "https://m-staging.artsy.net/artwork/bruce-gagnier-nude-study-arm-up-2",
  "https://m-staging.artsy.net/artwork/dike-blair-untitled-10",
  "https://m-staging.artsy.net/artwork/jenny-saville-matrix",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-12-the-muses-amusement",
  "https://m-staging.artsy.net/artwork/roy-lichtenstein-imperfect-painting",
  "https://m-staging.artsy.net/artwork/bruce-gagnier-nude-study-arm-up-3",
  "https://m-staging.artsy.net/artwork/howard-hodgkin-after-vuillard",
  "https://m-staging.artsy.net/artwork/dan-colen-for-they-know-not-what-they-do-self-portrait",
  "https://m-staging.artsy.net/artwork/souther-salazar-waited-too-long",
  "https://m-staging.artsy.net/artwork/robert-hite-prayer-house",
  "https://m-staging.artsy.net/artwork/tim-biskup-butcher-number-4",
  "https://m-staging.artsy.net/artwork/blek-le-rat-breaking-down-walls",
  "https://m-staging.artsy.net/artwork/janet-malcolm-par-avion",
  "https://m-staging.artsy.net/artwork/mike-kelley-extracurricular-activity-projective-reconstruction-number-9-farm-girl",
  "https://m-staging.artsy.net/artwork/michael-kenna-fifth-avenue-new-york",
  "https://m-staging.artsy.net/artwork/andy-warhol-mao-101",
  "https://m-staging.artsy.net/artwork/lucia-warck-meister-flux-ii",
  "https://m-staging.artsy.net/artwork/susannah-phillips-small-interior-with-fireplace",
  "https://m-staging.artsy.net/artwork/paul-resika-last-boat-and-moon",
  "https://m-staging.artsy.net/artwork/jeff-soto-lifecycle",
  "https://m-staging.artsy.net/artwork/steven-parrino-death-in-america-number-2",
  "https://m-staging.artsy.net/artwork/xiaoqing-ding-untitled",
  "https://m-staging.artsy.net/artwork/blek-le-rat-friends",
  "https://m-staging.artsy.net/artwork/wijnanda-deroo-grand-central-oyster-bar-and-restaurant-grand-central-terminal",
  "https://m-staging.artsy.net/artwork/anne-sherwood-pundyk-dianas-forest",
  "https://m-staging.artsy.net/artwork/glenn-brown-death-disco",
  "https://m-staging.artsy.net/artwork/james-isherwood-corsair",
  "https://m-staging.artsy.net/artwork/philip-taaffe-asuka-passage",
  "https://m-staging.artsy.net/artwork/titi-freak-i-believe-you",
  "https://m-staging.artsy.net/artwork/carsten-holler-mushroom",
  "https://m-staging.artsy.net/artwork/rosemarie-beck-two-at-a-view",
  "https://m-staging.artsy.net/artwork/kim-luttrell-mick",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-21-stepping-into-the-eternal",
  "https://m-staging.artsy.net/artwork/steven-parrino-untitled-72",
  "https://m-staging.artsy.net/artwork/wk-tracking-messenger-1",
  "https://m-staging.artsy.net/artwork/vera-lutter-corte-barozzi-venice-xiv-march-8-2006",
  "https://m-staging.artsy.net/artwork/mark-tansey-duet",
  "https://m-staging.artsy.net/artwork/tracy-silva-barbosa-mill-river-fog",
  "https://m-staging.artsy.net/artwork/mark-tansey-push-slash-pull",
  "https://m-staging.artsy.net/artwork/dirk-bach-no-games",
  "https://m-staging.artsy.net/artwork/michael-kenna-brooklyn-bridge-study-2-new-york",
  "https://m-staging.artsy.net/artwork/willard-boepple-w-7",
  "https://m-staging.artsy.net/artwork/laurent-millet-encore-un-effort-mr-kant",
  "https://m-staging.artsy.net/artwork/maritta-tapanainen-ilo-ilta",
  "https://m-staging.artsy.net/artwork/susannah-phillips-moonlit-pond",
  "https://m-staging.artsy.net/artwork/kentaro-hiramatsu-p-2",
  "https://m-staging.artsy.net/artwork/judy-glantzman-alice-neel",
  "https://m-staging.artsy.net/artwork/theodoros-stamos-untitled-infinity-field",
  "https://m-staging.artsy.net/artwork/julie-blackmon-the-after-party",
  "https://m-staging.artsy.net/artwork/larry-rivers-coopers-hawk-and-clock",
  "https://m-staging.artsy.net/artwork/eric-white-legion",
  "https://m-staging.artsy.net/artwork/camille-rose-garcia-total-destruction",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-15-prelude-and-fugue-in-green-minor",
  "https://m-staging.artsy.net/artwork/jongwang-lee-incarnation-ii",
  "https://m-staging.artsy.net/artwork/dirk-bach-walkingstick",
  "https://m-staging.artsy.net/artwork/wk-sebastien",
  "https://m-staging.artsy.net/artwork/alex-gross-julia",
  "https://m-staging.artsy.net/artwork/esao-andrews-petrosinella",
  "https://m-staging.artsy.net/artwork/mark-grotjahn-untitled-yellow-butterfly-i-p-mark-grotjahn-07-781",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-blue-stream",
  "https://m-staging.artsy.net/artwork/larry-fink-sarah-vaughan-new-york-city-november-1-1988",
  "https://m-staging.artsy.net/artwork/john-dubrow-pamet-hills",
  "https://m-staging.artsy.net/artwork/theodoros-stamos-delphic-sun-box-number-2",
  "https://m-staging.artsy.net/artwork/john-mack-merida-yucatan-mexico",
  "https://m-staging.artsy.net/artwork/vera-lutter-battersea-power-station-xv-july-23-2004",
  "https://m-staging.artsy.net/artwork/tine-lundsfryd-transfer-3",
  "https://m-staging.artsy.net/artwork/dan-witz-big-mosh-pit",
  "https://m-staging.artsy.net/artwork/john-lees-hera",
  "https://m-staging.artsy.net/artwork/richard-prince-nurse-on-trial",
  "https://m-staging.artsy.net/artwork/susannah-phillips-untitled-2",
  "https://m-staging.artsy.net/artwork/alex-gross-wish-you-were-here",
  "https://m-staging.artsy.net/artwork/kay-walkingstick-over-lolo-pass",
  "https://m-staging.artsy.net/artwork/paul-resika-through-the-trees-ii",
  "https://m-staging.artsy.net/artwork/georges-dambier-nelly-da-silva-ramos-pour-elle-paris",
  "https://m-staging.artsy.net/artwork/jeff-brouws-winslow-arizona",
  "https://m-staging.artsy.net/artwork/james-marshall-dalek-untitled-no-12",
  "https://m-staging.artsy.net/artwork/mark-tansey-ec-101",
  "https://m-staging.artsy.net/artwork/cy-twombly-camino-real-i",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-covered-green",
  "https://m-staging.artsy.net/artwork/helen-miranda-wilson-november-25-2005",
  "https://m-staging.artsy.net/artwork/louis-kahn-stepped-pyramid-no-dot-2-saqqara-egypt",
  "https://m-staging.artsy.net/artwork/maria-passarotti-dunes",
  "https://m-staging.artsy.net/artwork/janet-malcolm-burdock-no-16",
  "https://m-staging.artsy.net/artwork/james-marshall-dalek-untitled-no-5",
  "https://m-staging.artsy.net/artwork/don-joint-vesuvius",
  "https://m-staging.artsy.net/artwork/rosemarie-beck-house-of-venus",
  "https://m-staging.artsy.net/artwork/john-mack-comitan-chiapas-mexico",
  "https://m-staging.artsy.net/artwork/andy-warhol-pat-hearn",
  "https://m-staging.artsy.net/artwork/dirk-bach-poems-for-early-september",
  "https://m-staging.artsy.net/artwork/wijnanda-deroo-21-club-21-west-52nd-street",
  "https://m-staging.artsy.net/artwork/jenny-saville-reproduction-drawing-iii-after-the-leonardo-cartoon",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-trapped-in-the-narcissus-gaze-part-one",
  "https://m-staging.artsy.net/artwork/rosemarie-beck-bather",
  "https://m-staging.artsy.net/artwork/tim-biskup-asylum-number-3",
  "https://m-staging.artsy.net/artwork/alex-wood-in-the-meantime",
  "https://m-staging.artsy.net/artwork/souther-salazar-on-a-day-nobody-can-catch-us",
  "https://m-staging.artsy.net/artwork/jenny-saville-hem",
  "https://m-staging.artsy.net/artwork/charles-garabedian-the-eunuch",
  "https://m-staging.artsy.net/artwork/sharon-horvath-human-arrangement-ochre",
  "https://m-staging.artsy.net/artwork/michael-price-moon-of-gold",
  "https://m-staging.artsy.net/artwork/rachel-whiteread-5-stone-cement-plaster",
  "https://m-staging.artsy.net/artwork/georg-baselitz-untitled-31",
  "https://m-staging.artsy.net/artwork/norbert-prangenberg-fur-vincent",
  "https://m-staging.artsy.net/artwork/dirk-bach-sumida-kabuki-za",
  "https://m-staging.artsy.net/artwork/eric-white-the-ascension",
  "https://m-staging.artsy.net/artwork/john-lees-rhythm-king",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-18-time-immemorial",
  "https://m-staging.artsy.net/artwork/andy-kehoe-king-crow-grows-rampant",
  "https://m-staging.artsy.net/artwork/joe-deal-colton-california",
  "https://m-staging.artsy.net/artwork/natalia-fabia-i-heart-hello-kitty",
  "https://m-staging.artsy.net/artwork/tara-mcpherson-drawing-for-lost-constellations",
  "https://m-staging.artsy.net/artwork/paul-resika-two-chimneys",
  "https://m-staging.artsy.net/artwork/jeff-brouws-semiotics-vernaculus-portfolio",
  "https://m-staging.artsy.net/artwork/helen-miranda-wilson-october-5-2002",
  "https://m-staging.artsy.net/artwork/georges-dambier-suzy-parker-hortansia",
  "https://m-staging.artsy.net/artwork/paul-resika-sleep",
  "https://m-staging.artsy.net/artwork/joe-deal-untitled-k3-4-07a",
  "https://m-staging.artsy.net/artwork/louis-kahn-moored-boats-cape-breton-island-nova-scotia-canada",
  "https://m-staging.artsy.net/artwork/lucia-warck-meister-salt-flats",
  "https://m-staging.artsy.net/artwork/ed-ruscha-walking-talking-believing",
  "https://m-staging.artsy.net/artwork/dirk-bach-the-new-life",
  "https://m-staging.artsy.net/artwork/john-currin-constance-towers",
  "https://m-staging.artsy.net/artwork/michael-kenna-huangshan-mountains-study-1-anhui",
  "https://m-staging.artsy.net/artwork/janet-malcolm-untitled",
  "https://m-staging.artsy.net/artwork/john-dubrow-mark-strand-3",
  "https://m-staging.artsy.net/artwork/rachelle-krieger-almost-winter-maples",
  "https://m-staging.artsy.net/artwork/erik-mark-sandberg-chatsworth-4-slash-4",
  "https://m-staging.artsy.net/artwork/tine-lundsfryd-green-painting",
  "https://m-staging.artsy.net/artwork/henry-rothman-untitled-blue-with-red",
  "https://m-staging.artsy.net/artwork/james-marshall-dalek-untitled-f",
  "https://m-staging.artsy.net/artwork/natalia-fabia-sunshine",
  "https://m-staging.artsy.net/artwork/tim-biskup-no-god-but-god",
  "https://m-staging.artsy.net/artwork/dirk-bach-luge-calme-et-volupte",
  "https://m-staging.artsy.net/artwork/mary-mattingly-from-air-id-cities",
  "https://m-staging.artsy.net/artwork/esao-andrews-desert-beacon",
  "https://m-staging.artsy.net/artwork/kim-luttrell-party-girls",
  "https://m-staging.artsy.net/artwork/henry-rothman-untitled-explosion",
  "https://m-staging.artsy.net/artwork/gary-baseman-the-dawn-of-the-tree-nymph",
  "https://m-staging.artsy.net/artwork/david-poppie-echoes",
  "https://m-staging.artsy.net/artwork/willard-boepple-t1-r",
  "https://m-staging.artsy.net/artwork/dirk-bach-christmas-day",
  "https://m-staging.artsy.net/artwork/paul-resika-classic-pier",
  "https://m-staging.artsy.net/artwork/willard-boepple-rtb",
  "https://m-staging.artsy.net/artwork/jake-berthot-untitled",
  "https://m-staging.artsy.net/artwork/anne-tabachnick-shore-sunshine-ii",
  "https://m-staging.artsy.net/artwork/phil-frost-untitled-8",
  "https://m-staging.artsy.net/artwork/chip-hooper-elk-mendocino-county-pacific-ocean",
  "https://m-staging.artsy.net/artwork/michael-price-chromatic-sequence-no-2-the-labyrinth",
  "https://m-staging.artsy.net/artwork/doze-green-untitled-study-3",
  "https://m-staging.artsy.net/artwork/cy-twombly-lepanto-13",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-rose-reflections",
  "https://m-staging.artsy.net/artwork/dave-cooper-two-in-a-room",
  "https://m-staging.artsy.net/artwork/lucia-warck-meister-flux-iii",
  "https://m-staging.artsy.net/artwork/josh-agle-shag-family-secrets",
  "https://m-staging.artsy.net/artwork/philip-taaffe-rubedo-de-negro",
  "https://m-staging.artsy.net/artwork/holly-andres-the-red-purse",
  "https://m-staging.artsy.net/artwork/louie-cordero-arvizdawrn",
  "https://m-staging.artsy.net/artwork/richard-phillips-goring-deutsche-jagerschaft-letterhead-4",
  "https://m-staging.artsy.net/artwork/ellen-hermanos-victorian-pair",
  "https://m-staging.artsy.net/artwork/wijnanda-deroo-jerrys-90-chambers-street",
  "https://m-staging.artsy.net/artwork/invader-rubik-atom-heart-mother",
  "https://m-staging.artsy.net/artwork/jongwang-lee-phenomenon",
  "https://m-staging.artsy.net/artwork/louis-kahn-interior-parthenon-acropolis-athens-greece",
  "https://m-staging.artsy.net/artwork/erik-mark-sandberg-a-disconnect-in-the-union",
  "https://m-staging.artsy.net/artwork/amber-george-on-the-bias-no-2",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-covered-apple-tree",
  "https://m-staging.artsy.net/artwork/laurent-millet-vous-vous-trompez-mr-kant",
  "https://m-staging.artsy.net/artwork/tine-lundsfryd-untitled-6",
  "https://m-staging.artsy.net/artwork/dirk-bach-luge-calme-et-volupte-iii",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-the-sand-bar",
  "https://m-staging.artsy.net/artwork/damien-hirst-twelve-pills",
  "https://m-staging.artsy.net/artwork/edouard-manet-luncheon-on-the-grass-le-dejeuner-sur-lherbe",
  "https://m-staging.artsy.net/artwork/david-vestal-heavy-rains-on-roofs-across-street-from-77-east-10th-street-nyc",
  "https://m-staging.artsy.net/artwork/susannah-phillips-my-fathers-pipe",
  "https://m-staging.artsy.net/artwork/sebastiao-salgado-coal-mining-dhanbad-bihar-india",
  "https://m-staging.artsy.net/artwork/maria-passarotti-rooftop-brooklyn-ny",
  "https://m-staging.artsy.net/artwork/eve-aschheim-untitled-window",
  "https://m-staging.artsy.net/artwork/angela-acourt-red-jug",
  "https://m-staging.artsy.net/artwork/mary-mattingly-in-the-navel-of-the-moon",
  "https://m-staging.artsy.net/artwork/sharon-horvath-blue-bridges-number-4",
  "https://m-staging.artsy.net/artwork/wijnanda-deroo-relish-225-wythe-avenue-brooklyn",
  "https://m-staging.artsy.net/artwork/laurent-millet-une-illusion-mr-kant",
  "https://m-staging.artsy.net/artwork/nouar-please-enjoy",
  "https://m-staging.artsy.net/artwork/leland-bell-temma",
  "https://m-staging.artsy.net/artwork/dirk-bach-may-basket",
  "https://m-staging.artsy.net/artwork/leland-bell-study-for-morning-series-3",
  "https://m-staging.artsy.net/artwork/mark-tansey-trio",
  "https://m-staging.artsy.net/artwork/alberto-di-fabio-untitled-32",
  "https://m-staging.artsy.net/artwork/maritta-tapanainen-nocturnal-iii",
  "https://m-staging.artsy.net/artwork/glenn-brown-dirty",
  "https://m-staging.artsy.net/artwork/andy-warhol-skull",
  "https://m-staging.artsy.net/artwork/michael-price-a-part-of-eternity-no-46-more-yang-than-yin",
  "https://m-staging.artsy.net/artwork/ralph-wickiser-winter-stream",
  "https://m-staging.artsy.net/artwork/kay-walkingstick-uncloudy-day"
]

var superagent = require('superagent'),
    async = require('async'),
    _ = require('underscore');

var fetch = function (callback) {
  async.times(20 + Math.round(Math.random() * 20), function(n, next) {
    console.log('+');
    setTimeout(function() {
      // var url = _.sample(URLS)
      var url = 'http://ezel-leak.herokuapp.com';
      console.log('-', url);
      superagent
        .get(url)
        .timeout(3000)
        .end(function (err, res) {
          console.log('.')
          next(err, res);
        });
    }, 0);
  }, callback);
}

setInterval(fetch, 5000);
setTimeout(process.exit, 1000 * 60 * 60 * 10);
