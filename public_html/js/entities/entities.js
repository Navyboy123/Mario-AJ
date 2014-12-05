// TODO
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "mario",
                spritewidth: "128",
                spriteheight: "128",
                width: 128,
                height: 128,
                getShape: function() {
                    return (new me.Rect(0, 0, 128, 128)).toPolygon();
                }
            }]);

        this.renderable.addAnimation("idle", [3]);
        this.renderable.addAnimation("smallWalk", [8, 9, 10, 11, 12, 13], 80);

        this.renderable.setCurrentAnimation("idle");

    },
    
    /*-------------------------------------------------------------------------
     * player movement (diretctionals)
     * ------------------------------------------------------------------------ 
     */
   
    update: function(dt) {
        
        this.body.setVelocity(5, 20);  
        
        if(me.input.isKeyPressed("jump")){
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
        }
        
        if(me.input.isKeyPressed("left")){
            this.flipX(true); 
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
          
        }else if(me.input.isKeyPressed("right")) {
            this.flipX(false);
            this.body.vel.x += this.body.accel.x * me.timer.tick;
        }
        else{
            this.body.vel.x = 0;
        }     
     
        //sets the animation of the character while ide and in movement//
        if (this.body.vel.x !== 0) {
            if (!this.renderable.isCurrentAnimation("smallWalk")){
                this.renderable.setCurrentAnimation("smallWalk");
                this.renderable.setAnimationFrame();
            }
        } else{
            this.renderable.setCurrentAnimation("idle");
        }
        
       


        this.body.update(dt);
        this._super(me.Entity, "update", [dt]);
        return true;
    }
});
//sets up for the character to move to the next level// 
game.LevelTrigger = me.Entity.extend ({
    init: function (x,y, settings){
        this._super(me.Entity, 'init', [x,y, settings]);
        this.body.onCollisions = this.onCollision.bind(this); 
        this.level = settings. level; 
        this.xSpawn = settings. xSpawn; 
        this.ySpawn = settings.yspawn; 
    },
    
    onCollision:function() {
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level); 
        me.state.cucurrent().resetPlayer(this.xSpawn, this.ySpawn);
    } 
    });