game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        
        //states where the map and other images are coming from//
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
        {name: "mario", type:"image", src: "data/img/player1.png"},

	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        
        //tells you where the map from tiled is going to be//
        {name: "lvl0matrix", type: "tmx", src: "data/map/lvl 0 (martix).tmx"},
         {name: "level2", type: "tmx", src: "data/map/lvl 0-1.tmx"},

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
];
