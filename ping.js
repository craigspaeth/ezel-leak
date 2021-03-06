//
// Pings the app around the rate of Force in production (30 rps)
//

var url = process.argv[2]
var BASE_URL = 'https://microgravity-leak2.herokuapp.com';
var URLS = [
  BASE_URL + "/artwork/tara-mcpherson-the-days-eye-trance-2",
  BASE_URL + "/artwork/amber-george-plaided",
  BASE_URL + "/artwork/tim-biskup-follow-me",
  BASE_URL + "/artwork/alex-wood-boiling-point",
  BASE_URL + "/artwork/dike-blair-untitled-9",
  BASE_URL + "/artwork/kentaro-hiramatsu-park-12-r",
  BASE_URL + "/artwork/michael-price-chromatic-composition-no-14-just-venus-again",
  BASE_URL + "/artwork/dirk-bach-adrift-vii",
  BASE_URL + "/artwork/jeff-brouws-railroad-landscape-number-3-poughkeepsie-and-eastern-right-of-way-abandoned-1938-mp-92-view-south-sprint-mcintyre-new-york",
  BASE_URL + "/artwork/titi-freak-traido",
  BASE_URL + "/artwork/henry-rothman-untitled-map",
  BASE_URL + "/artwork/julie-blackmon-loading-zone",
  BASE_URL + "/artwork/elisa-sighicelli-untitled-empty-square",
  BASE_URL + "/artwork/ed-ruscha-music",
  BASE_URL + "/artwork/fumiko-toda-memory",
  BASE_URL + "/artwork/cecily-brown-untitled-18",
  BASE_URL + "/artwork/lucia-warck-meister-bronx-beach-ii",
  BASE_URL + "/artwork/nouar-hot-diggity-dog",
  BASE_URL + "/artwork/david-smith-ds-2-22-56",
  BASE_URL + "/artwork/michael-price-the-barberini-faun",
  BASE_URL + "/artwork/paul-resika-untitled-lighthouse",
  BASE_URL + "/artwork/jeff-soto-storm-clouds-for-slinky",
  BASE_URL + "/artwork/kim-luttrell-marilyn",
  BASE_URL + "/artwork/phil-frost-untitled-37",
  BASE_URL + "/artwork/carolyn-monastra-holl-house",
  BASE_URL + "/artwork/maria-passarotti-caravan",
  BASE_URL + "/artwork/anne-tabachnick-autumn-sky",
  BASE_URL + "/artwork/laurent-millet-calmez-vous-mr-kant",
  BASE_URL + "/artwork/julie-blackmon-concert",
  BASE_URL + "/artwork/vera-lutter-basel-uferstrasse-ii-january-15-17-2001",
  BASE_URL + "/artwork/jeff-koons-couple-dots-ii",
  BASE_URL + "/artwork/louis-kahn-gabled-manor-england",
  BASE_URL + "/artwork/john-dubrow-alix",
  BASE_URL + "/artwork/luis-maldonado-seasonal-winter",
  BASE_URL + "/artwork/silvina-mamani-run-away-in-my-mind",
  BASE_URL + "/artwork/holly-andres-the-el-camino-incident",
  BASE_URL + "/artwork/dave-cooper-mangle-panel-a",
  BASE_URL + "/artwork/holly-andres-the-magic-elixir",
  BASE_URL + "/artwork/andy-warhol-retrospective-reversal-series",
  BASE_URL + "/artwork/joe-deal-sinkhole-pecos-valley",
  BASE_URL + "/artwork/wk-christ",
  BASE_URL + "/artwork/paul-resika-boats-at-the-pier",
  BASE_URL + "/artwork/kim-luttrell-where-are-we-going",
  BASE_URL + "/artwork/louie-cordero-magnolvelzum",
  BASE_URL + "/artwork/dirk-bach-otani-kabuki-za",
  BASE_URL + "/artwork/tara-mcpherson-the-cherry-blossom-trance-2",
  BASE_URL + "/artwork/louise-kruger-untitled-woman",
  BASE_URL + "/artwork/ellen-gallagher-watery-ecstatic-series-2",
  BASE_URL + "/artwork/stephan-doitschinoff-calma-ad-astra-per-aspera",
  BASE_URL + "/artwork/roy-lichtenstein-still-life-with-cabbage",
  BASE_URL + "/artwork/dirk-bach-surveyors-petition",
  BASE_URL + "/artwork/michael-kenna-flying-bird-over-san-marco-venice-italy",
  BASE_URL + "/artwork/wk-anthony",
  BASE_URL + "/artwork/kim-luttrell-sight-of-beauty-and-the-expectation-of-what-we-see-to-be-beauty-number-2",
  BASE_URL + "/artwork/eve-aschheim-untitled",
  BASE_URL + "/artwork/wijnanda-deroo-cafe-des-artistes-1-west-67th-street",
  BASE_URL + "/artwork/jim-houser-family-tree",
  BASE_URL + "/artwork/dirk-bach-luge-calme-et-volupte-ii",
  BASE_URL + "/artwork/dave-cooper-testical-sky-study",
  BASE_URL + "/artwork/jenny-saville-reflective-flesh",
  BASE_URL + "/artwork/ralph-wickiser-coruscate",
  BASE_URL + "/artwork/lisa-breslow-central-park-lake-9",
  BASE_URL + "/artwork/rosemarie-beck-house-of-the-sun-iii",
  BASE_URL + "/artwork/david-vestal-east-59th-street-from-automat-cafeteria-nyc",
  BASE_URL + "/artwork/camille-rose-garcia-why-dont-you-try-the-blue-pill",
  BASE_URL + "/artwork/franz-west-untitled-2008",
  BASE_URL + "/artwork/tara-mcpherson-the-bunny-in-the-moon",
  BASE_URL + "/artwork/dirk-bach-kays-basket",
  BASE_URL + "/artwork/anne-sherwood-pundyk-sharpshooter",
  BASE_URL + "/artwork/rachelle-krieger-winter-approaching",
  BASE_URL + "/artwork/lucia-warck-meister-bronx-beach-1",
  BASE_URL + "/artwork/donna-sharrett-before-something-else-happens-the-52nd-memento",
  BASE_URL + "/artwork/robert-hite-mud-flat-house",
  BASE_URL + "/artwork/andy-warhol-reflected-zeitgeist-series",
  BASE_URL + "/artwork/robin-friend-untitled",
  BASE_URL + "/artwork/helen-miranda-wilson-february-5-2004",
  BASE_URL + "/artwork/henry-rothman-untitled-black-white-and-yellow",
  BASE_URL + "/artwork/audrey-kawasaki-asobiba-playground",
  BASE_URL + "/artwork/philip-taaffe-sanarac",
  BASE_URL + "/artwork/takashi-murakami-bokan-camouflage-pink-2",
  BASE_URL + "/artwork/janet-malcolm-burdock-no-21",
  BASE_URL + "/artwork/gary-baseman-the-keeper-of-our-destiny",
  BASE_URL + "/artwork/carolyn-monastra-wonderglass",
  BASE_URL + "/artwork/rosemarie-beck-robert",
  BASE_URL + "/artwork/susannah-phillips-rusty-knife",
  BASE_URL + "/artwork/kim-luttrell-john",
  BASE_URL + "/artwork/sharon-horvath-black-bed",
  BASE_URL + "/artwork/richard-serra-p-and-e-xiv",
  BASE_URL + "/artwork/paul-resika-tower",
  BASE_URL + "/artwork/susannah-phillips-interior-with-lamp-i-2008",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-17-intimations-of-immortality",
  BASE_URL + "/artwork/chip-hooper-afternoon-fog-black-point-pacific-ocean",
  BASE_URL + "/artwork/gustav-klimt-der-kuss-the-kiss",
  BASE_URL + "/artwork/tara-mcpherson-trapped-in-the-narcissus-gaze-part-two-3",
  BASE_URL + "/artwork/kentaro-hiramatsu-p-1",
  BASE_URL + "/artwork/julie-blackmon-portrait",
  BASE_URL + "/artwork/tine-lundsfryd-transfer-ii",
  BASE_URL + "/artwork/francisco-jose-de-goya-y-lucientes-the-third-of-may-the-execution-of-spanish-insurgents-by-napoleonic-troops-under-general-murat-on-principe-pio-hill-madrid-may-3-1808",
  BASE_URL + "/artwork/esao-andrews-masked-nemeans",
  BASE_URL + "/artwork/tim-biskup-untitled",
  BASE_URL + "/artwork/amber-george-sew-sew",
  BASE_URL + "/artwork/jeff-soto-jakob",
  BASE_URL + "/artwork/janet-malcolm-burdock-no-15",
  BASE_URL + "/artwork/mary-mattingly-dry-season",
  BASE_URL + "/artwork/jeff-soto-volcano",
  BASE_URL + "/artwork/erik-mark-sandberg-girl-with-hot-spring-fashion",
  BASE_URL + "/artwork/james-isherwood-untitled-3",
  BASE_URL + "/artwork/kay-walkingstick-sicilia",
  BASE_URL + "/artwork/john-mack-los-cardencheros-torreon-coahuila-mexico",
  BASE_URL + "/artwork/georges-dambier-marie-helene-arnaud-eden-roc-cap-dantibes-elle",
  BASE_URL + "/artwork/jeff-brouws-ranch-house-cafe-vaughn-new-mexico",
  BASE_URL + "/artwork/georges-dambier-suzy-parker-tulips",
  BASE_URL + "/artwork/mary-mattingly-family-of-man",
  BASE_URL + "/artwork/greg-drasler-hats",
  BASE_URL + "/artwork/jim-houser-the-jargon-of-criminals",
  BASE_URL + "/artwork/mark-tansey-snowman",
  BASE_URL + "/artwork/james-isherwood-wedger",
  BASE_URL + "/artwork/james-isherwood-eastender",
  BASE_URL + "/artwork/elisa-sighicelli-iceland-blue-bed",
  BASE_URL + "/artwork/souther-salazar-how-we-love-to-have-other-people-love-things-through-our-eyes",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-20-kundrys-bed-of-roses",
  BASE_URL + "/artwork/joe-deal-view-albuquerque-new-mexico",
  BASE_URL + "/artwork/james-marshall-dalek-untitled-number-13",
  BASE_URL + "/artwork/dirk-bach-the-magician-iv",
  BASE_URL + "/artwork/matthew-cusick-turning-japanese",
  BASE_URL + "/artwork/anne-tabachnick-negril-series",
  BASE_URL + "/artwork/audrey-kawasaki-hyakki-yakou-night-parade",
  BASE_URL + "/artwork/titi-freak-untitled-1",
  BASE_URL + "/artwork/camille-rose-garcia-hippo-baby-blood-storm",
  BASE_URL + "/artwork/david-poppie-hum",
  BASE_URL + "/artwork/tara-mcpherson-the-snow-bride",
  BASE_URL + "/artwork/theodoros-stamos-infinity-field-olympia-ii",
  BASE_URL + "/artwork/rosemarie-beck-landscape",
  BASE_URL + "/artwork/john-currin-purple-bra",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-10-delightful-discoveries",
  BASE_URL + "/artwork/xiaoqing-ding-blue-ribbon",
  BASE_URL + "/artwork/willard-boepple-w-3-09-dot-03-dot-10-h",
  BASE_URL + "/artwork/william-bailey-doglio",
  BASE_URL + "/artwork/josh-agle-shag-license-to-peep",
  BASE_URL + "/artwork/michael-kenna-corridor-of-leaves-guastalla-emilia-romagna-italy",
  BASE_URL + "/artwork/gregory-crewdson-untitled-57",
  BASE_URL + "/artwork/julie-blackmon-lost-mitten",
  BASE_URL + "/artwork/jongwang-lee-incarnation-iii",
  BASE_URL + "/artwork/mike-kelley-hermaphrodite-war-victim",
  BASE_URL + "/artwork/greg-drasler-wiggle-room-slash-penthouse",
  BASE_URL + "/artwork/frank-hyder-two-directions",
  BASE_URL + "/artwork/tara-mcpherson-drawing-for-somewhere-under-the-rainbow-turquoise",
  BASE_URL + "/artwork/titi-freak-angel",
  BASE_URL + "/artwork/doze-green-taking-liberty",
  BASE_URL + "/artwork/ralph-wickiser-pink-apple-tree",
  BASE_URL + "/artwork/jeff-brouws-one-squeeze-proves-bend-oregon",
  BASE_URL + "/artwork/heather-boose-weiss-ushuaia",
  BASE_URL + "/artwork/alberto-di-fabio-sinapsi-plus-cosmo",
  BASE_URL + "/artwork/ralph-wickiser-limb-over-water",
  BASE_URL + "/artwork/john-mack-dusk-falls-on-revolution-avenue-in-the-boarder-city-of-tijuana-baja-california",
  BASE_URL + "/artwork/rosemarie-beck-atlanta",
  BASE_URL + "/artwork/jeff-soto-love-can-surpass-all-obstacles",
  BASE_URL + "/artwork/tracy-silva-barbosa-impetus",
  BASE_URL + "/artwork/kay-walkingstick-our-land-variation-ii",
  BASE_URL + "/artwork/louise-kruger-untitled-man",
  BASE_URL + "/artwork/esao-andrews-drifters",
  BASE_URL + "/artwork/holly-andres-siblings-and-pet-chicken",
  BASE_URL + "/artwork/andy-kehoe-a-welcome-to-coming-days",
  BASE_URL + "/artwork/chip-hooper-sunset-bodega-bay-pacific-ocean",
  BASE_URL + "/artwork/richard-wright-untitled-01-dot-02-dot-03",
  BASE_URL + "/artwork/paul-resika-through-the-trees-evening",
  BASE_URL + "/artwork/laurent-millet-ne-faites-pas-lenfant-mr-kant",
  BASE_URL + "/artwork/richard-prince-the-moon",
  BASE_URL + "/artwork/robert-hite-picket-house",
  BASE_URL + "/artwork/roy-lichtenstein-still-life-with-clock-and-roses",
  BASE_URL + "/artwork/mary-mattingly-awakening",
  BASE_URL + "/artwork/tom-sachs-principal-flow-diagram",
  BASE_URL + "/artwork/blek-le-rat-say-boo-to-the-boomen",
  BASE_URL + "/artwork/tara-mcpherson-searching-for-penguins-1",
  BASE_URL + "/artwork/georg-baselitz-fridas-traum",
  BASE_URL + "/artwork/ralph-wickiser-fall-reflections",
  BASE_URL + "/artwork/judy-glantzman-judith-and-holofernes",
  BASE_URL + "/artwork/tara-mcpherson-the-days-eye-lotus",
  BASE_URL + "/artwork/dan-witz-mosh-pit-i",
  BASE_URL + "/artwork/fumiko-toda-butterfly-away-black",
  BASE_URL + "/artwork/camille-rose-garcia-royal-disorder-subterranean-invasion",
  BASE_URL + "/artwork/tine-lundsfryd-sum",
  BASE_URL + "/artwork/james-marshall-dalek-untitled-no-11",
  BASE_URL + "/artwork/phil-frost-untitled-44",
  BASE_URL + "/artwork/paul-fusco-untitled-june-8-1968",
  BASE_URL + "/artwork/louie-cordero-cold-cuts",
  BASE_URL + "/artwork/anne-tabachnick-orange-abstract-with-table-at-bottom",
  BASE_URL + "/artwork/lucia-warck-meister-long-beach",
  BASE_URL + "/artwork/tara-mcpherson-the-cherry-blossom-trance-3",
  BASE_URL + "/artwork/angela-acourt-new-spaces",
  BASE_URL + "/artwork/dave-cooper-mangle-study",
  BASE_URL + "/artwork/john-lees-apex",
  BASE_URL + "/artwork/georges-dambier-dorian-leigh-au-normandi",
  BASE_URL + "/artwork/sharon-horvath-diamond-triangle-3",
  BASE_URL + "/artwork/rachel-whiteread-metallic-black-yellow",
  BASE_URL + "/artwork/david-vestal-falling-snow-from-back-window-133-west-22nd-street-nyc",
  BASE_URL + "/artwork/tara-mcpherson-trapped-in-the-narcissus-gaze-part-two-4",
  BASE_URL + "/artwork/anne-sherwood-pundyk-lindsay",
  BASE_URL + "/artwork/tim-biskup-finished",
  BASE_URL + "/artwork/judy-glantzman-red-dress",
  BASE_URL + "/artwork/nicola-verlato-hellraiser",
  BASE_URL + "/artwork/tine-lundsfryd-aster-v",
  BASE_URL + "/artwork/holly-andres-the-missing-bird",
  BASE_URL + "/artwork/kay-walkingstick-nez-perce-crossing-variation",
  BASE_URL + "/artwork/tracy-silva-barbosa-punica-granatum",
  BASE_URL + "/artwork/dirk-bach-special-delivery",
  BASE_URL + "/artwork/georg-baselitz-winterzeit-3",
  BASE_URL + "/artwork/philip-taaffe-spuma-lupi",
  BASE_URL + "/artwork/louise-kruger-man-on-couch",
  BASE_URL + "/artwork/john-mack-congregants-at-an-outdoor-mass-near-tiacochahuaya-oaxaca-mexico",
  BASE_URL + "/artwork/nouar-milk-fed-veal",
  BASE_URL + "/artwork/tracy-silva-barbosa-gelid-passaic",
  BASE_URL + "/artwork/jim-houser-hexes",
  BASE_URL + "/artwork/alex-gross-oblivion",
  BASE_URL + "/artwork/rackstraw-downes-farm-buildings-near-the-rio-grande-under-the-barn-roof-am",
  BASE_URL + "/artwork/titi-freak-waiting-for-you",
  BASE_URL + "/artwork/fumiko-toda-path",
  BASE_URL + "/artwork/paul-resika-white-cloud",
  BASE_URL + "/artwork/james-marshall-dalek-untitled-g",
  BASE_URL + "/artwork/erik-mark-sandberg-glamour-panel-5",
  BASE_URL + "/artwork/bas-princen-car-beach",
  BASE_URL + "/artwork/nouar-milkface-mindy",
  BASE_URL + "/artwork/eric-white-massacre-of-the-innocents",
  BASE_URL + "/artwork/anne-tabachnick-squares-edge-of-the-city-black-lacoon",
  BASE_URL + "/artwork/david-smith-untitled-11",
  BASE_URL + "/artwork/sharon-horvath-night-summer-three",
  BASE_URL + "/artwork/georges-dambier-catherine-dune-du-pyla",
  BASE_URL + "/artwork/kim-luttrell-lizard-king",
  BASE_URL + "/artwork/gary-baseman-enlightened-chou-golden-book-green",
  BASE_URL + "/artwork/tine-lundsfryd-untitled-5",
  BASE_URL + "/artwork/andy-kehoe-holding-on-to-the-old-and-dying",
  BASE_URL + "/artwork/larry-rivers-berdie",
  BASE_URL + "/artwork/michael-price-before-time",
  BASE_URL + "/artwork/mary-mattingly-mono-lake",
  BASE_URL + "/artwork/alex-gross-jozaikai-purgatory",
  BASE_URL + "/artwork/andy-warhol-robert-mapplethorpe",
  BASE_URL + "/artwork/dave-cooper-procession",
  BASE_URL + "/artwork/gary-baseman-morning-blossom",
  BASE_URL + "/artwork/julie-blackmon-take-off",
  BASE_URL + "/artwork/henry-rothman-untitled-ouest",
  BASE_URL + "/artwork/andy-warhol-one-green-cow",
  BASE_URL + "/artwork/wijnanda-deroo-delmonicos-56-beaver-street",
  BASE_URL + "/artwork/matthew-cusick-red-and-blue",
  BASE_URL + "/artwork/janet-malcolm-untitled-landscape",
  BASE_URL + "/artwork/carolyn-monastra-the-corn-field",
  BASE_URL + "/artwork/paul-resika-blue-wave",
  BASE_URL + "/artwork/jake-berthot-red-point-form-for-brancusi",
  BASE_URL + "/artwork/phil-frost-untitled-47",
  BASE_URL + "/artwork/paul-resika-red-and-black",
  BASE_URL + "/artwork/michael-kenna-giza-pyramids-study-6-cairo",
  BASE_URL + "/artwork/leland-bell-temma-seated",
  BASE_URL + "/artwork/john-dubrow-bleecker-playground",
  BASE_URL + "/artwork/john-lees-bathtub",
  BASE_URL + "/artwork/helen-miranda-wilson-cookie-apple-grapes-nuts",
  BASE_URL + "/artwork/louis-kahn-granite-quarries-no-5b-aswan-egy",
  BASE_URL + "/artwork/kay-walkingstick-finding-the-center-iv",
  BASE_URL + "/artwork/jeff-brouws-night-window-los-angeles-california",
  BASE_URL + "/artwork/ellen-gallagher-odalisque",
  BASE_URL + "/artwork/jim-houser-snares",
  BASE_URL + "/artwork/rembrandt-harmensz-van-rijn-the-company-of-frans-banning-cocq-and-willem-van-ruytenburch-the-night-watch",
  BASE_URL + "/artwork/joe-deal-backyard-diamond-bar-california",
  BASE_URL + "/artwork/jeff-koons-peg-leg",
  BASE_URL + "/artwork/susannah-phillips-dark-still-life",
  BASE_URL + "/artwork/richard-phillips-awake-into-myth",
  BASE_URL + "/artwork/david-vestal-penn-station-glass-roofed-waiting-room-nyc",
  BASE_URL + "/artwork/david-vestal-man-with-umbrella-rain-puddle-from-above-11-west-22nd-street-nyc",
  BASE_URL + "/artwork/doze-green-untitled-03",
  BASE_URL + "/artwork/paul-resika-abstraction-second-state",
  BASE_URL + "/artwork/paul-resika-flowers-in-hawthornes-pitcher",
  BASE_URL + "/artwork/leland-bell-morning",
  BASE_URL + "/artwork/holly-andres-calvin",
  BASE_URL + "/artwork/tara-mcpherson-the-days-eye-trance-3",
  BASE_URL + "/artwork/laurent-millet-ne-vous-fatiguez-pas-mr-kant",
  BASE_URL + "/artwork/jongwang-lee-transmutation",
  BASE_URL + "/artwork/ed-ruscha-levitated-hope",
  BASE_URL + "/artwork/paul-resika-untitled-boat-group-black-and-red",
  BASE_URL + "/artwork/dave-cooper-four-in-a-car-study",
  BASE_URL + "/artwork/jim-houser-crush-bones",
  BASE_URL + "/artwork/jeff-brouws-ice-cream-booth-ventura-ca",
  BASE_URL + "/artwork/michael-price-chromatic-composition-no-6-mirror-like-annunciation",
  BASE_URL + "/artwork/anne-tabachnick-blue-quilt-mcdowell",
  BASE_URL + "/artwork/eve-aschheim-in-time",
  BASE_URL + "/artwork/david-vestal-flatiron-building-night-from-26th-street-nyc",
  BASE_URL + "/artwork/louie-cordero-vlanderkrust",
  BASE_URL + "/artwork/matthew-cusick-crown-of-creation",
  BASE_URL + "/artwork/chip-hooper-mendocino-county-coast-pacific-ocean",
  BASE_URL + "/artwork/joe-deal-untitled-view-boulder-city",
  BASE_URL + "/artwork/eve-aschheim-upsurge-mist",
  BASE_URL + "/artwork/dave-cooper-mangle-panel-b",
  BASE_URL + "/artwork/paul-resika-sleeping-with-the-moon",
  BASE_URL + "/artwork/josh-agle-shag-self-portrait-with-black-liquid",
  BASE_URL + "/artwork/stephan-doitschinoff-calma-ragnarok",
  BASE_URL + "/artwork/paul-resika-red-nude-night",
  BASE_URL + "/artwork/jake-berthot-icarus",
  BASE_URL + "/artwork/maria-passarotti-allerton",
  BASE_URL + "/artwork/jeff-soto-car-crash",
  BASE_URL + "/artwork/donna-sharrett-long-may-you-run",
  BASE_URL + "/artwork/richard-serra-solid-number-13",
  BASE_URL + "/artwork/ellen-gallagher-counterfeit",
  BASE_URL + "/artwork/elisa-sighicelli-untitled-flower-pot",
  BASE_URL + "/artwork/richard-prince-christmas",
  BASE_URL + "/artwork/tara-mcpherson-the-death-of-boto-2",
  BASE_URL + "/artwork/michael-craig-martin-cassette",
  BASE_URL + "/artwork/ralph-wickiser-over-flow",
  BASE_URL + "/artwork/dirk-bach-thunder-on-the-mountain",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-5-memory-shadow-and-the-unimaginable",
  BASE_URL + "/artwork/bruce-gagnier-nude-study-arm-up-2",
  BASE_URL + "/artwork/dike-blair-untitled-10",
  BASE_URL + "/artwork/jenny-saville-matrix",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-12-the-muses-amusement",
  BASE_URL + "/artwork/roy-lichtenstein-imperfect-painting",
  BASE_URL + "/artwork/bruce-gagnier-nude-study-arm-up-3",
  BASE_URL + "/artwork/howard-hodgkin-after-vuillard",
  BASE_URL + "/artwork/dan-colen-for-they-know-not-what-they-do-self-portrait",
  BASE_URL + "/artwork/souther-salazar-waited-too-long",
  BASE_URL + "/artwork/robert-hite-prayer-house",
  BASE_URL + "/artwork/tim-biskup-butcher-number-4",
  BASE_URL + "/artwork/blek-le-rat-breaking-down-walls",
  BASE_URL + "/artwork/janet-malcolm-par-avion",
  BASE_URL + "/artwork/mike-kelley-extracurricular-activity-projective-reconstruction-number-9-farm-girl",
  BASE_URL + "/artwork/michael-kenna-fifth-avenue-new-york",
  BASE_URL + "/artwork/andy-warhol-mao-101",
  BASE_URL + "/artwork/lucia-warck-meister-flux-ii",
  BASE_URL + "/artwork/susannah-phillips-small-interior-with-fireplace",
  BASE_URL + "/artwork/paul-resika-last-boat-and-moon",
  BASE_URL + "/artwork/jeff-soto-lifecycle",
  BASE_URL + "/artwork/steven-parrino-death-in-america-number-2",
  BASE_URL + "/artwork/xiaoqing-ding-untitled",
  BASE_URL + "/artwork/blek-le-rat-friends",
  BASE_URL + "/artwork/wijnanda-deroo-grand-central-oyster-bar-and-restaurant-grand-central-terminal",
  BASE_URL + "/artwork/anne-sherwood-pundyk-dianas-forest",
  BASE_URL + "/artwork/glenn-brown-death-disco",
  BASE_URL + "/artwork/james-isherwood-corsair",
  BASE_URL + "/artwork/philip-taaffe-asuka-passage",
  BASE_URL + "/artwork/titi-freak-i-believe-you",
  BASE_URL + "/artwork/carsten-holler-mushroom",
  BASE_URL + "/artwork/rosemarie-beck-two-at-a-view",
  BASE_URL + "/artwork/kim-luttrell-mick",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-21-stepping-into-the-eternal",
  BASE_URL + "/artwork/steven-parrino-untitled-72",
  BASE_URL + "/artwork/wk-tracking-messenger-1",
  BASE_URL + "/artwork/vera-lutter-corte-barozzi-venice-xiv-march-8-2006",
  BASE_URL + "/artwork/mark-tansey-duet",
  BASE_URL + "/artwork/tracy-silva-barbosa-mill-river-fog",
  BASE_URL + "/artwork/mark-tansey-push-slash-pull",
  BASE_URL + "/artwork/dirk-bach-no-games",
  BASE_URL + "/artwork/michael-kenna-brooklyn-bridge-study-2-new-york",
  BASE_URL + "/artwork/willard-boepple-w-7",
  BASE_URL + "/artwork/laurent-millet-encore-un-effort-mr-kant",
  BASE_URL + "/artwork/maritta-tapanainen-ilo-ilta",
  BASE_URL + "/artwork/susannah-phillips-moonlit-pond",
  BASE_URL + "/artwork/kentaro-hiramatsu-p-2",
  BASE_URL + "/artwork/judy-glantzman-alice-neel",
  BASE_URL + "/artwork/theodoros-stamos-untitled-infinity-field",
  BASE_URL + "/artwork/julie-blackmon-the-after-party",
  BASE_URL + "/artwork/larry-rivers-coopers-hawk-and-clock",
  BASE_URL + "/artwork/eric-white-legion",
  BASE_URL + "/artwork/camille-rose-garcia-total-destruction",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-15-prelude-and-fugue-in-green-minor",
  BASE_URL + "/artwork/jongwang-lee-incarnation-ii",
  BASE_URL + "/artwork/dirk-bach-walkingstick",
  BASE_URL + "/artwork/wk-sebastien",
  BASE_URL + "/artwork/alex-gross-julia",
  BASE_URL + "/artwork/esao-andrews-petrosinella",
  BASE_URL + "/artwork/mark-grotjahn-untitled-yellow-butterfly-i-p-mark-grotjahn-07-781",
  BASE_URL + "/artwork/ralph-wickiser-blue-stream",
  BASE_URL + "/artwork/larry-fink-sarah-vaughan-new-york-city-november-1-1988",
  BASE_URL + "/artwork/john-dubrow-pamet-hills",
  BASE_URL + "/artwork/theodoros-stamos-delphic-sun-box-number-2",
  BASE_URL + "/artwork/john-mack-merida-yucatan-mexico",
  BASE_URL + "/artwork/vera-lutter-battersea-power-station-xv-july-23-2004",
  BASE_URL + "/artwork/tine-lundsfryd-transfer-3",
  BASE_URL + "/artwork/dan-witz-big-mosh-pit",
  BASE_URL + "/artwork/john-lees-hera",
  BASE_URL + "/artwork/richard-prince-nurse-on-trial",
  BASE_URL + "/artwork/susannah-phillips-untitled-2",
  BASE_URL + "/artwork/alex-gross-wish-you-were-here",
  BASE_URL + "/artwork/kay-walkingstick-over-lolo-pass",
  BASE_URL + "/artwork/paul-resika-through-the-trees-ii",
  BASE_URL + "/artwork/georges-dambier-nelly-da-silva-ramos-pour-elle-paris",
  BASE_URL + "/artwork/jeff-brouws-winslow-arizona",
  BASE_URL + "/artwork/james-marshall-dalek-untitled-no-12",
  BASE_URL + "/artwork/mark-tansey-ec-101",
  BASE_URL + "/artwork/cy-twombly-camino-real-i",
  BASE_URL + "/artwork/ralph-wickiser-covered-green",
  BASE_URL + "/artwork/helen-miranda-wilson-november-25-2005",
  BASE_URL + "/artwork/louis-kahn-stepped-pyramid-no-dot-2-saqqara-egypt",
  BASE_URL + "/artwork/maria-passarotti-dunes",
  BASE_URL + "/artwork/janet-malcolm-burdock-no-16",
  BASE_URL + "/artwork/james-marshall-dalek-untitled-no-5",
  BASE_URL + "/artwork/don-joint-vesuvius",
  BASE_URL + "/artwork/rosemarie-beck-house-of-venus",
  BASE_URL + "/artwork/john-mack-comitan-chiapas-mexico",
  BASE_URL + "/artwork/andy-warhol-pat-hearn",
  BASE_URL + "/artwork/dirk-bach-poems-for-early-september",
  BASE_URL + "/artwork/wijnanda-deroo-21-club-21-west-52nd-street",
  BASE_URL + "/artwork/jenny-saville-reproduction-drawing-iii-after-the-leonardo-cartoon",
  BASE_URL + "/artwork/tara-mcpherson-trapped-in-the-narcissus-gaze-part-one",
  BASE_URL + "/artwork/rosemarie-beck-bather",
  BASE_URL + "/artwork/tim-biskup-asylum-number-3",
  BASE_URL + "/artwork/alex-wood-in-the-meantime",
  BASE_URL + "/artwork/souther-salazar-on-a-day-nobody-can-catch-us",
  BASE_URL + "/artwork/jenny-saville-hem",
  BASE_URL + "/artwork/charles-garabedian-the-eunuch",
  BASE_URL + "/artwork/sharon-horvath-human-arrangement-ochre",
  BASE_URL + "/artwork/michael-price-moon-of-gold",
  BASE_URL + "/artwork/rachel-whiteread-5-stone-cement-plaster",
  BASE_URL + "/artwork/georg-baselitz-untitled-31",
  BASE_URL + "/artwork/norbert-prangenberg-fur-vincent",
  BASE_URL + "/artwork/dirk-bach-sumida-kabuki-za",
  BASE_URL + "/artwork/eric-white-the-ascension",
  BASE_URL + "/artwork/john-lees-rhythm-king",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-18-time-immemorial",
  BASE_URL + "/artwork/andy-kehoe-king-crow-grows-rampant",
  BASE_URL + "/artwork/joe-deal-colton-california",
  BASE_URL + "/artwork/natalia-fabia-i-heart-hello-kitty",
  BASE_URL + "/artwork/tara-mcpherson-drawing-for-lost-constellations",
  BASE_URL + "/artwork/paul-resika-two-chimneys",
  BASE_URL + "/artwork/jeff-brouws-semiotics-vernaculus-portfolio",
  BASE_URL + "/artwork/helen-miranda-wilson-october-5-2002",
  BASE_URL + "/artwork/georges-dambier-suzy-parker-hortansia",
  BASE_URL + "/artwork/paul-resika-sleep",
  BASE_URL + "/artwork/joe-deal-untitled-k3-4-07a",
  BASE_URL + "/artwork/louis-kahn-moored-boats-cape-breton-island-nova-scotia-canada",
  BASE_URL + "/artwork/lucia-warck-meister-salt-flats",
  BASE_URL + "/artwork/ed-ruscha-walking-talking-believing",
  BASE_URL + "/artwork/dirk-bach-the-new-life",
  BASE_URL + "/artwork/john-currin-constance-towers",
  BASE_URL + "/artwork/michael-kenna-huangshan-mountains-study-1-anhui",
  BASE_URL + "/artwork/janet-malcolm-untitled",
  BASE_URL + "/artwork/john-dubrow-mark-strand-3",
  BASE_URL + "/artwork/rachelle-krieger-almost-winter-maples",
  BASE_URL + "/artwork/erik-mark-sandberg-chatsworth-4-slash-4",
  BASE_URL + "/artwork/tine-lundsfryd-green-painting",
  BASE_URL + "/artwork/henry-rothman-untitled-blue-with-red",
  BASE_URL + "/artwork/james-marshall-dalek-untitled-f",
  BASE_URL + "/artwork/natalia-fabia-sunshine",
  BASE_URL + "/artwork/tim-biskup-no-god-but-god",
  BASE_URL + "/artwork/dirk-bach-luge-calme-et-volupte",
  BASE_URL + "/artwork/mary-mattingly-from-air-id-cities",
  BASE_URL + "/artwork/esao-andrews-desert-beacon",
  BASE_URL + "/artwork/kim-luttrell-party-girls",
  BASE_URL + "/artwork/henry-rothman-untitled-explosion",
  BASE_URL + "/artwork/gary-baseman-the-dawn-of-the-tree-nymph",
  BASE_URL + "/artwork/david-poppie-echoes",
  BASE_URL + "/artwork/willard-boepple-t1-r",
  BASE_URL + "/artwork/dirk-bach-christmas-day",
  BASE_URL + "/artwork/paul-resika-classic-pier",
  BASE_URL + "/artwork/willard-boepple-rtb",
  BASE_URL + "/artwork/jake-berthot-untitled",
  BASE_URL + "/artwork/anne-tabachnick-shore-sunshine-ii",
  BASE_URL + "/artwork/phil-frost-untitled-8",
  BASE_URL + "/artwork/chip-hooper-elk-mendocino-county-pacific-ocean",
  BASE_URL + "/artwork/michael-price-chromatic-sequence-no-2-the-labyrinth",
  BASE_URL + "/artwork/doze-green-untitled-study-3",
  BASE_URL + "/artwork/cy-twombly-lepanto-13",
  BASE_URL + "/artwork/ralph-wickiser-rose-reflections",
  BASE_URL + "/artwork/dave-cooper-two-in-a-room",
  BASE_URL + "/artwork/lucia-warck-meister-flux-iii",
  BASE_URL + "/artwork/josh-agle-shag-family-secrets",
  BASE_URL + "/artwork/philip-taaffe-rubedo-de-negro",
  BASE_URL + "/artwork/holly-andres-the-red-purse",
  BASE_URL + "/artwork/louie-cordero-arvizdawrn",
  BASE_URL + "/artwork/richard-phillips-goring-deutsche-jagerschaft-letterhead-4",
  BASE_URL + "/artwork/ellen-hermanos-victorian-pair",
  BASE_URL + "/artwork/wijnanda-deroo-jerrys-90-chambers-street",
  BASE_URL + "/artwork/invader-rubik-atom-heart-mother",
  BASE_URL + "/artwork/jongwang-lee-phenomenon",
  BASE_URL + "/artwork/louis-kahn-interior-parthenon-acropolis-athens-greece",
  BASE_URL + "/artwork/erik-mark-sandberg-a-disconnect-in-the-union",
  BASE_URL + "/artwork/amber-george-on-the-bias-no-2",
  BASE_URL + "/artwork/ralph-wickiser-covered-apple-tree",
  BASE_URL + "/artwork/laurent-millet-vous-vous-trompez-mr-kant",
  BASE_URL + "/artwork/tine-lundsfryd-untitled-6",
  BASE_URL + "/artwork/dirk-bach-luge-calme-et-volupte-iii",
  BASE_URL + "/artwork/ralph-wickiser-the-sand-bar",
  BASE_URL + "/artwork/damien-hirst-twelve-pills",
  BASE_URL + "/artwork/edouard-manet-luncheon-on-the-grass-le-dejeuner-sur-lherbe",
  BASE_URL + "/artwork/david-vestal-heavy-rains-on-roofs-across-street-from-77-east-10th-street-nyc",
  BASE_URL + "/artwork/susannah-phillips-my-fathers-pipe",
  BASE_URL + "/artwork/sebastiao-salgado-coal-mining-dhanbad-bihar-india",
  BASE_URL + "/artwork/maria-passarotti-rooftop-brooklyn-ny",
  BASE_URL + "/artwork/eve-aschheim-untitled-window",
  BASE_URL + "/artwork/angela-acourt-red-jug",
  BASE_URL + "/artwork/mary-mattingly-in-the-navel-of-the-moon",
  BASE_URL + "/artwork/sharon-horvath-blue-bridges-number-4",
  BASE_URL + "/artwork/wijnanda-deroo-relish-225-wythe-avenue-brooklyn",
  BASE_URL + "/artwork/laurent-millet-une-illusion-mr-kant",
  BASE_URL + "/artwork/nouar-please-enjoy",
  BASE_URL + "/artwork/leland-bell-temma",
  BASE_URL + "/artwork/dirk-bach-may-basket",
  BASE_URL + "/artwork/leland-bell-study-for-morning-series-3",
  BASE_URL + "/artwork/mark-tansey-trio",
  BASE_URL + "/artwork/alberto-di-fabio-untitled-32",
  BASE_URL + "/artwork/maritta-tapanainen-nocturnal-iii",
  BASE_URL + "/artwork/glenn-brown-dirty",
  BASE_URL + "/artwork/andy-warhol-skull",
  BASE_URL + "/artwork/michael-price-a-part-of-eternity-no-46-more-yang-than-yin",
  BASE_URL + "/artwork/ralph-wickiser-winter-stream",
  BASE_URL + "/artwork/kay-walkingstick-uncloudy-day"
]

var superagent = require('superagent'),
    async = require('async'),
    _ = require('underscore');

var fetch = function (callback) {
  async.times(50 + Math.round(Math.random() * 50), function(n, next) {
    console.log('+');
    setTimeout(function() {
      // var url = _.sample(URLS)
      // var url = 'http://ezel-leak.herokuapp.com';
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
