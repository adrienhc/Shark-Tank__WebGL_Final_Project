window.Cube = window.classes.Cube =
class Cube extends Shape                 // Here's a complete, working example of a Shape subclass.  It is a blueprint for a cube.
  { constructor()
      { super( "positions", "normals" ); // Name the values we'll define per each vertex.  They'll have positions and normals.

        // First, specify the vertex positions -- just a bunch of points that exist at the corners of an imaginary cube.
        this.positions.push( ...Vec.cast( [-1,-1,-1], [1,-1,-1], [-1,-1,1], [1,-1,1], [1,1,-1],  [-1,1,-1],  [1,1,1],  [-1,1,1],
                                          [-1,-1,-1], [-1,-1,1], [-1,1,-1], [-1,1,1], [1,-1,1],  [1,-1,-1],  [1,1,1],  [1,1,-1],
                                          [-1,-1,1],  [1,-1,1],  [-1,1,1],  [1,1,1], [1,-1,-1], [-1,-1,-1], [1,1,-1], [-1,1,-1] ) );
        // Supply vectors that point away from eace face of the cube.  They should match up with the points in the above list
        // Normal vectors are needed so the graphics engine can know if the shape is pointed at light or not, and color it accordingly.
        this.normals.push(   ...Vec.cast( [0,-1,0], [0,-1,0], [0,-1,0], [0,-1,0], [0,1,0], [0,1,0], [0,1,0], [0,1,0], [-1,0,0], [-1,0,0],
                                          [-1,0,0], [-1,0,0], [1,0,0],  [1,0,0],  [1,0,0], [1,0,0], [0,0,1], [0,0,1], [0,0,1],   [0,0,1],
                                          [0,0,-1], [0,0,-1], [0,0,-1], [0,0,-1] ) );

                 // Those two lists, positions and normals, fully describe the "vertices".  What's the "i"th vertex?  Simply the combined
                 // data you get if you look up index "i" of both lists above -- a position and a normal vector, together.  Now let's
                 // tell it how to connect vertex entries into triangles.  Every three indices in this list makes one triangle:
        this.indices.push( 8, 9, 10, 9, 11, 10, 12, 13,
                          14, 13, 15, 14, 16, 17, 18, 17, 19, 18, 20, 21, 22, 21, 23, 22 );
        // It stinks to manage arrays this big.  Later we'll show code that generates these same cube vertices more automatically.
      }
  }

window.Tank_Opaque = window.classes.Tank_Opaque = 
class Tank_Opaque extends Shape
{
    constructor()
      { super( "positions", "normals" ); // Name the values we'll define per each vertex.  They'll have positions and normals.

        // First, specify the vertex positions -- just a bunch of points that exist at the corners of an imaginary cube.
        this.positions.push( ...Vec.cast( [-1,-1,-1], [1,-1,-1], [-1,-1,1], [1,-1,1], [1,1,-1],  [-1,1,-1],  [1,1,1],  [-1,1,1],
                                          [-1,-1,-1], [-1,-1,1], [-1,1,-1], [-1,1,1], [1,-1,1],  [1,-1,-1],  [1,1,1],  [1,1,-1],
                                          [-1,-1,1],  [1,-1,1],  [-1,1,1],  [1,1,1], [1,-1,-1], [-1,-1,-1], [1,1,-1], [-1,1,-1] ) );
        // Supply vectors that point away from eace face of the cube.  They should match up with the points in the above list
        // Normal vectors are needed so the graphics engine can know if the shape is pointed at light or not, and color it accordingly.
        this.normals.push(   ...Vec.cast( [0,-1,0], [0,-1,0], [0,-1,0], [0,-1,0], [0,1,0], [0,1,0], [0,1,0], [0,1,0], [-1,0,0], [-1,0,0],
                                          [-1,0,0], [-1,0,0], [1,0,0],  [1,0,0],  [1,0,0], [1,0,0], [0,0,1], [0,0,1], [0,0,1],   [0,0,1],
                                          [0,0,-1], [0,0,-1], [0,0,-1], [0,0,-1] ) );

                 // Those two lists, positions and normals, fully describe the "vertices".  What's the "i"th vertex?  Simply the combined
                 // data you get if you look up index "i" of both lists above -- a position and a normal vector, together.  Now let's
                 // tell it how to connect vertex entries into triangles.  Every three indices in this list makes one triangle:
        this.indices.push( 8, 9, 10, 9, 11, 10, 20, 21, 22, 21, 23, 22 );
        // It stinks to manage arrays this big.  Later we'll show code that generates these same cube vertices more automatically.
      }

}

window.Tank_Transparent = window.classes.Tank_Transparent =
class Tank_Transparent extends Shape
{
    constructor()
      { super( "positions", "normals" ); // Name the values we'll define per each vertex.  They'll have positions and normals.

        // First, specify the vertex positions -- just a bunch of points that exist at the corners of an imaginary cube.
        this.positions.push( ...Vec.cast( [-1,-1,-1], [1,-1,-1], [-1,-1,1], [1,-1,1], [1,1,-1],  [-1,1,-1],  [1,1,1],  [-1,1,1],
                                          [-1,-1,-1], [-1,-1,1], [-1,1,-1], [-1,1,1], [1,-1,1],  [1,-1,-1],  [1,1,1],  [1,1,-1],
                                          [-1,-1,1],  [1,-1,1],  [-1,1,1],  [1,1,1], [1,-1,-1], [-1,-1,-1], [1,1,-1], [-1,1,-1] ) );
        // Supply vectors that point away from eace face of the cube.  They should match up with the points in the above list
        // Normal vectors are needed so the graphics engine can know if the shape is pointed at light or not, and color it accordingly.
        this.normals.push(   ...Vec.cast( [0,-1,0], [0,-1,0], [0,-1,0], [0,-1,0], [0,1,0], [0,1,0], [0,1,0], [0,1,0], [-1,0,0], [-1,0,0],
                                          [-1,0,0], [-1,0,0], [1,0,0],  [1,0,0],  [1,0,0], [1,0,0], [0,0,1], [0,0,1], [0,0,1],   [0,0,1],
                                          [0,0,-1], [0,0,-1], [0,0,-1], [0,0,-1] ) );

                 // Those two lists, positions and normals, fully describe the "vertices".  What's the "i"th vertex?  Simply the combined
                 // data you get if you look up index "i" of both lists above -- a position and a normal vector, together.  Now let's
                 // tell it how to connect vertex entries into triangles.  Every three indices in this list makes one triangle:
        this.indices.push(  12, 13,
                          14, 13, 15, 14, 16, 17, 18, 17, 19, 18 );
        // It stinks to manage arrays this big.  Later we'll show code that generates these same cube vertices more automatically.
      }
}

window.Square = window.classes.Square =
class Square extends Shape              // A square, demonstrating two triangles that share vertices.  On any planar surface, the interior 
                                        // edges don't make any important seams.  In these cases there's no reason not to re-use data of
{                                       // the common vertices between triangles.  This makes all the vertex arrays (position, normals, 
  constructor(zoom=1)                         // etc) smaller and more cache friendly.
    { super( "positions", "normals", "texture_coords" );                                   // Name the values we'll define per each vertex.
      this.positions     .push( ...Vec.cast( [-1,-1,-1], [1,-1,-1], [-1,-1,1], [1,-1,1] ) );   // Specify the 4 square corner locations.
      this.normals       .push( ...Vec.cast( [0,-1,0],   [0,-1,0],  [0,-1,0],  [0,-1,0] ) );   // Match those up with normal vectors.
      this.texture_coords.push( ...Vec.cast( [0,0],     [zoom,0],    [0,zoom],    [zoom,zoom]   ) );   // Draw a square in texture coordinates too.
      this.indices       .push( 0, 1, 2,     1, 3, 2 );                   // Two triangles this time, indexing into four distinct vertices.
    }
}

/*SHAPES FOR SHARK*/
window.Shark = window.classes.Shark = 
class Shark extends Shape
{
    constructor(){
        super( "positions", "normals", "texture_coords" );       
        let triangle_transform = Mat4.identity().times(Mat4.translation([-0.5,0.25,0])).times(Mat4.scale([2,2,2]));;
        let sphere_transform = Mat4.identity().times(Mat4.translation([0,0.25,0])).times(Mat4.scale([2,0.6,1]));
        Triangle.insert_transformed_copy_into( this, [4], triangle_transform);
        Subdivision_Sphere.insert_transformed_copy_into( this, [4], sphere_transform);   
    }
}

/*SHAPES FOR RUBBER DUCK*/

window.DuckBody = window.classes.DuckBody = 
class DuckBody extends Shape
{
    constructor()
    {
        super( "positions", "normals", "texture_coords" );
        var sphere_transform = Mat4.identity().times(Mat4.rotation(-Math.PI/2,Vec.of(0,1,0))).times(Mat4.translation([0,1.75,2]).times(Mat4.scale([1.2,1.2,1.2])));
        var torus_transform = Mat4.identity().times(Mat4.rotation(-Math.PI/2,Vec.of(1,0,0))).times(Mat4.scale([1,1,1.2]));;
        var cone_transform = Mat4.identity().times(Mat4.rotation(-Math.PI/2,Vec.of(0,1,0))).times(Mat4.rotation(Math.PI,Vec.of(0,1,0))).times(Mat4.translation([0,0.75,2.75])).times(Mat4.rotation(-Math.PI/4,Vec.of(1,0,0))).times(Mat4.scale([0.75,0.75,0.75]));
        //times(Mat4.translation([2,0,0])).times(Mat4.rotation(-Math.PI/4,Vec.of(0,1,0))).times(Mat4.translation([-2,0,0])).times(Mat4.translation([2,0,0])).times(Mat4.rotation(-Math.PI/2,Vec.of(0,0,1)));
        Subdivision_Sphere.insert_transformed_copy_into( this, [4], sphere_transform);
        Torus.insert_transformed_copy_into( this, [15,15], torus_transform );
        Cone_Tip.insert_transformed_copy_into( this, [15,15], cone_transform );
    }
}
window.DuckBeak = window.classes.DuckBeak =
class DuckBeak extends Shape
{
    constructor()
    {
        super( "positions", "normals", "texture_coords" );
        var cone_transform = Mat4.identity().times(Mat4.rotation(-Math.PI/2,Vec.of(0,1,0))).times(Mat4.translation([0,2,3])).times(Mat4.rotation(-Math.PI/6,Vec.of(1,0,0))).times(Mat4.scale([1,0.75,0.75]));
        Cone_Tip.insert_transformed_copy_into( this, [15,15], cone_transform );
    }    
}

/* SHAPES FOR CANNON */
class CannonBody extends Shape
{
    constructor()
    {
        super( "positions", "normals", "texture_coords" );
        var cylinder_transform = Mat4.identity().times(Mat4.rotation(Math.PI/3,Vec.of(-1,0,0))).times(Mat4.scale([1.5,1.5,9])).times(Mat4.rotation(Math.PI,Vec.of(1,0,0)));
        Cylindrical_Tube.insert_transformed_copy_into( this, [15,15], cylinder_transform)
    }    
}

class CannonBase extends Shape
{
    constructor()
    {
        super( "positions", "normals", "texture_coords" );
        var sphere_transform = Mat4.identity().times(Mat4.rotation(Math.PI/3,Vec.of(-1,0,0))).times(Mat4.scale([2.25,2.25,3.5])).times(Mat4.rotation(Math.PI,Vec.of(1,0,0))).times(Mat4.translation([0,0,0.8]));
        Subdivision_Sphere.insert_transformed_copy_into( this, [4], sphere_transform)
    }    
}

class CannonWheels extends Shape
{
    constructor()
    {
        super( "positions", "normals", "texture_coords" );
        var wheel_transform =  Mat4.identity().times(Mat4.translation([2.25,-4,-2])).times(Mat4.rotation(Math.PI/2,Vec.of(0,1,0))).times(Mat4.scale([2,2,0.5]));
        var wheel_transform2 = Mat4.identity().times(Mat4.translation([-2.25,-4,-2])).times(Mat4.rotation(Math.PI/2,Vec.of(0,1,0))).times(Mat4.scale([2,2,0.5]));
        Rounded_Capped_Cylinder.insert_transformed_copy_into( this, [15,15], wheel_transform);
        Rounded_Capped_Cylinder.insert_transformed_copy_into( this, [15,15], wheel_transform2);

    }
}

class Texture_Caustic extends Phong_Shader
{ fragment_glsl_code()           // ********* FRAGMENT SHADER ********* 
    {
      // TODO:  Modify the shader below (right now it's just the same fragment shader as Phong_Shader) for requirement #6.
      return `
        uniform sampler2D texture;
        void main()
        { if( GOURAUD || COLOR_NORMALS )    // Do smooth "Phong" shading unless options like "Gouraud mode" are wanted instead.
          { gl_FragColor = VERTEX_COLOR;    // Otherwise, we already have final colors to smear (interpolate) across vertices.            
            return;
          }                                 // If we get this far, calculate Smooth "Phong" Shading as opposed to Gouraud Shading.
                                            // Phong shading is not to be confused with the Phong Reflection Model.
   
          vec4 tex_color = texture2D( texture, f_tex_coord);                         // Sample the texture image in the correct place.
          vec3 bumped_N = normalize( N + tex_color.rgb - 0.5 * vec3(1,1,1) );
                                                                                     // Compute an initial (ambient) color:
          if( USE_TEXTURE ) gl_FragColor = vec4( ( tex_color.xyz + shapeColor.xyz ) * ambient, shapeColor.w * tex_color.w ); 
          else gl_FragColor = vec4( shapeColor.xyz * ambient, shapeColor.w );
          gl_FragColor.xyz += phong_model_lights( bumped_N );                     // Compute the final color with contributions from lights.
        }`;
    }
}

window.Cube_Outline = window.classes.Cube_Outline =
class Cube_Outline extends Shape
  { constructor()
      { super( "positions", "colors" ); // Name the values we'll define per each vertex.

        //  TODO (Requirement 5).
                                // When a set of lines is used in graphics, you should think of the list entries as
                                // broken down into pairs; each pair of vertices will be drawn as a line segment.
        
        // First, specify the vertex positions -- just a bunch of points that exist at the corners of an imaginary cube.
        this.positions.push( ...Vec.cast( [-1,-1,-1], [1,-1,-1], 
                                          [1,-1,-1], [1,-1,1], 
                                          [1,-1,1],  [-1,-1,1],  
                                          [-1,-1,1],  [-1,-1,-1], // Bottom 4

                                          [-1,1,-1], [1,1,-1], 
                                          [1,1,-1], [1,1,1], 
                                          [1,1,1],  [-1,1,1],  
                                          [-1,1,1],  [-1,1,-1], // Top 4
                                          
                                          [-1,-1,-1],  [-1,1,-1],  
                                          [1,-1,-1],  [1,1,-1], 
                                          [1,-1,1], [1,1,1], 
                                          [-1,-1,1], [-1,1,1] ) ); //Vertical 4
  
       this.colors = [Color.of( 1,1,1,1 ),  Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ),
        Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ),
         Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ),
          Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ),
           Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 ), Color.of( 1,1,1,1 )];

        this.indexed = false;       // Do this so we won't need to define "this.indices".
      }
  }

window.Cube_Single_Strip = window.classes.Cube_Single_Strip =
class Cube_Single_Strip extends Shape
  { constructor(positions, normals, indices)
      { super( "positions", "normals" );
       this.positions = positions;
       this.normals = normals;
       this.indices = indices;
      }
  }


window.Water = window.classes.Water =
class Water extends Shape    
{ constructor(rows, columns, width, length, Height_Map)      
      {       
        let positions = [];
        let normals = [];
        let indices = []; 

        
       for(var i=0; i< rows; i++){
          let x = i*width/(rows-1);
          for(var j=0; j< columns; j++){
            let y = j*length/(columns-1);
            positions.push(Vec.of(x,Height_Map[i][j],y)); 
            normals.push(Vec.of(0,1,0));         
          }
        }

        for(var i=0; i< rows - 1; i++){
            if(i%2==0)
            for(var x=i*columns; x< (i+1)*columns - 1; x++){
                  indices.push(x,x+1,x+columns,x+columns,x+1,x+columns+1);     

                  //x = x + this.columns;     
            }
            else 
            for(var x= (i+1)*columns - 2; x >= i*columns; x--){
                  indices.push(x,x+1,x+columns+1,x,x+columns+1,x+columns);     

                  //x = x + this.columns;     
            }   
        }                        

      super( "positions", "normals" );
       this.positions = positions;
       this.normals = normals;
       this.indices = indices;
     }
  
     send_water(gl)
     {
         this.copy_onto_graphics_card(gl, ["positions", "normals"], false);  
     }

}


// //This class should be done in terms of coordinates, not indices, because y coordinates do not have indices 
// class cannonBall    //This is only used to get the coordinates of the cannon ball in every frame.
// {
//   constructor(start_pos, end_pos, timeDuration, xUpperBound, zUpperBound, yLowerBound, model_transform, initialTime) 
//   {
//     this.initialTime = initialTime;
//     this.x_coord = this.x_coord_initial = start_pos[0]; 
//     this.z_coord = this.z_coord_initial = start_pos[2];
//     this.y_coord = this.y_coord_initial = start_pos[1]; 
//     this.xUpperBound = xUpperBound;
//     this.zUpperBound = zUpperBound;
//     this.yLowerBound = yLowerBound;


//     this.collided= false;

//     this.cannonBall_transform = model_transform.times(Mat4.translation([start_pos[0], start_pos[1], start_pos[2]])).times(Mat4.scale([1,1,1])); //SCALE LATER
//     this.airTimeDuration = 0;

//     this.xVelocity = (end_pos[0] - start_pos[0])/timeDuration; 
//     this.zVelocity = (end_pos[2] - start_pos[2])/timeDuration; 

//     this.waterContactTime = 0;
//     this.xVelocity_underwater = 0;
//     this.zVelocity_underwater = 0; 
//     this.yVelocity_underwater = 0; 
//     this.x_coord_waterContact = 0;
//     this.z_coord_waterContact = 0;
//     this.y_coord_waterContact = 0;  //Used to find precise contact height because y==0 happens between frames.
//     this.transitioningToUnderwater = true;

//     this.gravAccel = -17.5;
//     let totalHeightChange = end_pos[1] - start_pos[1]; 
//     this.yVelocity = this.yVelocity_initial = totalHeightChange/timeDuration - (this.gravAccel/2)*timeDuration;
//   }

// possibleBounceOffWall()
// {
//     if (this.x_coord < 0)
//    { 
//         this.x_coord = 0;
//         this.xVelocity_underwater *= -1;
//    }
//    else if (this.x_coord > this.xUpperBound)
//    {
//         this.x_coord = this.xUpperBound;
//         this.xVelocity_underwater *= -1;
//    }
//        if (this.z_coord < 0)
//    { 
//         this.z_coord = 0;
//         this.zVelocity_underwater *= -1;
//    }
//    else if (this.z_coord > this.zUpperBound)
//    {
//         this.z_coord = this.zUpperBound;
//         this.zVelocity_underwater *= -1;
//    }



// //For a cannonBall colliding with another cannonBall...change only the first ball's velocity.
// changeVelocites(new_xVelocity, new_yVelocity, new_zVelocity)
// {
//     this.xVelocity = this.xVelocity_underwater = new_xVelocity;
//     this.zVelocity = this.zVelocity_underwater = new_zVelocity;
//     this.yVelocity = this.yVelocity_underwater = new_yVelocity;
// }


//  veloAndPosUpdate (t)
//     {  


//       let elapsedTime = t - this.initialTime;
//       this.possibleBounceOffWall();
      
//         if(this.y_coord>=0)
//         {
//           let new_x = this.x_coord_initial + this.xVelocity * elapsedTime;
//           let new_z = this.z_coord_initial + this.zVelocity * elapsedTime;

//           this.yVelocity = this.yVelocity_initial + this.gravAccel * elapsedTime;
//           let new_y = this.y_coord_initial + this.yVelocity_initial * elapsedTime + (this.gravAccel/2)*elapsedTime**2;

//            let xTest = new_x - this.x_coord, yTest = new_y - this.y_coord, zTest = new_z - this.z_coord;
//            let temp = this.cannonBall_transform.times(Mat4.translation([new_x - this.x_coord, new_y - this.y_coord, new_z - this.z_coord]));
//            this.cannonBall_transform = temp;


//           this.x_coord = new_x;
//           this.y_coord = new_y; 
//           this.z_coord = new_z;
//         }
//         else
//         {
//           if (this.transitioningToUnderwater)
//             {
//                 this.transitioningToUnderwater = false;
//                 this.waterContactTime = elapsedTime;
//                 this.xVelocity_underwater = (.3)*this.xVelocity;            //From here forward, xVelocity, zVelocity, and yVelocity act like initial velocities (velocities at moment of contact with water)
//                 this.zVelocity_underwater = (.3)*this.zVelocity;
//                 this.yVelocity_underwater = (.4)*this.yVelocity;
//                 this.airTimeDuration = this.waterContactTime - this.initialTime;
//                 this.x_coord_waterContact = this.x_coord;
//                 this.z_coord_waterContact = this.z_coord;
//                 this.y_coord_waterContact = this.y_coord;
//             }
          
//           let dt = 1/10;
//           let fastestSink = -30;
//           let hardFloor = true; //Hardcode depending on if the floor shoul act like sand or acting like concrete 

//           if(Math.abs(this.xVelocity_underwater)>.4||Math.abs(this.zVelocity_underwater)>.4)
//           {
//           this.xVelocity_underwater *= .91;
//           this.zVelocity_underwater *= .91;
//           if(this.yVelocity_underwater<fastestSink)
//           this.yVelocity_underwater *= .98;
//           }
//           else 
//           this.xVelocity_underwater = this.zVelocity_underwater = 0;
          
//            if (hardFloor && this.y_coord < this.yLowerBound)
//               this.yVelocity_underwater *= .3;
//            else if (this.y_coord < this.yLowerBound)
//               this.yVelocity_underwater *= .98; 

//           let new_x = this.x_coord + this.xVelocity_underwater*dt;
//           let new_z = this.z_coord + this.zVelocity_underwater*dt;
//           let new_y = this.y_coord + this.yVelocity_underwater*dt;

//            let temp = this.cannonBall_transform.times(Mat4.translation([new_x - this.x_coord, new_y - this.y_coord, new_z - this.z_coord]));
//            this.cannonBall_transform = temp;


//           this.x_coord = new_x;
//           this.y_coord = new_y; 
//           this.z_coord = new_z;
//         }   
//     }
// }


///////////////////////////////////////////////////////////////////////////////////////////////////
//UPGRADED WALL BOUNCING BELOW
///////////////////////////////////////////////////////////////////////////////////////////////////


//This class should be done in terms of coordinates, not indices, because y coordinates do not have indices 
class cannonBall    //This is only used to get the coordinates of the cannon ball in every frame.
{
  constructor(start_pos, end_pos, timeDuration, xUpperBound, zUpperBound, yLowerBound, model_transform, initialTime) 
  {
    this.initialTime = initialTime;
    this.x_coord = this.x_coord_initial = start_pos[0]; 
    this.z_coord = this.z_coord_initial = start_pos[2];
    this.y_coord = this.y_coord_initial = start_pos[1]; 
    this.xUpperBound = xUpperBound;
    this.zUpperBound = zUpperBound;
    this.yLowerBound = yLowerBound;

    this.hasBouncedOffWall = false;
    this.bounceTime = 0;
    this.xVelocity_afterBounce = 0;
    this.zVelocity_afterBounce = 0;

    this.collided= false;

    this.cannonBall_transform = model_transform.times(Mat4.translation([start_pos[0], start_pos[1], start_pos[2]])).times(Mat4.scale([1,1,1])); //SCALE LATER
    this.airTimeDuration = 0;

    this.xVelocity = (end_pos[0] - start_pos[0])/timeDuration; 
    this.zVelocity = (end_pos[2] - start_pos[2])/timeDuration; 

    this.waterContactTime = 0;
    this.xVelocity_underwater = 0;
    this.zVelocity_underwater = 0; 
    this.yVelocity_underwater = 0; 
    this.x_coord_waterContact = 0;
    this.z_coord_waterContact = 0;
    this.y_coord_waterContact = 0;  //Used to find precise contact height because y==0 happens between frames.
    this.transitioningToUnderwater = true;

    this.gravAccel = -17.5;
    let totalHeightChange = end_pos[1] - start_pos[1]; 
    this.yVelocity = this.yVelocity_initial = totalHeightChange/timeDuration - (this.gravAccel/2)*timeDuration;
  }

possibleBounceOffWall(elapsedTime)
{
    if (elapsedTime<2)
    return;

    if (this.x_coord < 1)
   { 
        this.x_coord = 0;
        this.xVelocity_underwater *= -1;
        this.xVelocity_afterBounce = -this.xVelocity;
        this.zVelocity_afterBounce = this.zVelocity;    //Don't change the velocity in the direction it did not bounce!
        this.bounceTime = elapsedTime;
        this.hasBouncedOffWall = true;
   }
   else if (this.x_coord > this.xUpperBound-1)
   {
        this.x_coord = this.xUpperBound;
        this.xVelocity_underwater *= -1;
        this.xVelocity_afterBounce = -this.xVelocity;
        this.zVelocity_afterBounce = this.zVelocity;
        this.bounceTime = elapsedTime;
        this.hasBouncedOffWall = true;
   }
       if (this.z_coord < 1)
   { 
        this.z_coord = 0;
        this.zVelocity_underwater *= -1;
        this.zVelocity_afterBounce = -this.zVelocity;
        this.xVelocity_afterBounce = this.xVelocity;
        this.bounceTime = elapsedTime;
        this.hasBouncedOffWall = true;
   }
   else if (this.z_coord > this.zUpperBound-1)
   {
        this.z_coord = this.zUpperBound;
        this.zVelocity_underwater *= -1;
        this.zVelocity_afterBounce = -this.zVelocity;
        this.xVelocity_afterBounce = this.xVelocity;    
        this.bounceTime = elapsedTime;
        this.hasBouncedOffWall = true;
   }
}


//For a cannonBall colliding with another cannonBall...change only the first ball's velocity.
changeVelocites(new_xVelocity, new_yVelocity, new_zVelocity)
{
    this.xVelocity = this.xVelocity_underwater = new_xVelocity;
    this.zVelocity = this.zVelocity_underwater = new_zVelocity;
    this.yVelocity = this.yVelocity_underwater = new_yVelocity;
}


 veloAndPosUpdate (t)
    {  


      let elapsedTime = t - this.initialTime;
      this.possibleBounceOffWall(elapsedTime);
      
        if(this.y_coord>=0)
        {
          let new_x = 0;        //defined here because JS requires, won't allow definition in the if and else.
          let new_z = 0;
          let new_y = 0;
          
          if (!this.hasBouncedOffWall&& elapsedTime>=2) //USE THIS ONE FOR TESTING THE WEIRD OUT OF BOUNDS BEHAVIOR
          {
               new_x = this.x_coord_initial + this.xVelocity * elapsedTime;
               new_z = this.z_coord_initial + this.zVelocity * elapsedTime;
          }
          else if (!this.hasBouncedOffWall)
          {
               new_x = this.x_coord_initial + this.xVelocity * elapsedTime;

               new_z = this.z_coord_initial + this.zVelocity * elapsedTime;
          }
          else 
          {
              if (this.x_coord==0)      ///WHAT THE FUUUUUUUUCK IS HAPPENING 
              new_x = 10;
              else if (this.x_coord==this.xUpperBound)
              new_x = this.xUpperBound - 10;
              else
              new_x = this.x_coord_initial + this.xVelocity * this.bounceTime + this.xVelocity_afterBounce*(elapsedTime-this.bounceTime);

              if (this.z_coord==0)
              new_z = 10;
              else if (this.z_coord==this.zUpperBound)
              new_z = this.zUpperBound - 10;
              else
              new_z = this.z_coord_initial + this.zVelocity*this.bounceTime + this.zVelocity_afterBounce*(elapsedTime-this.bounceTime);
          }

          this.yVelocity = this.yVelocity_initial + this.gravAccel * elapsedTime;
          new_y = this.y_coord_initial + this.yVelocity_initial * elapsedTime + (this.gravAccel/2)*elapsedTime**2;

           let temp = this.cannonBall_transform.times(Mat4.translation([new_x - this.x_coord, new_y - this.y_coord, new_z - this.z_coord]));
           this.cannonBall_transform = temp;


          this.x_coord = new_x;
          this.y_coord = new_y; 
          this.z_coord = new_z;
        }
        else
        {
          if (this.transitioningToUnderwater)
            {
                this.transitioningToUnderwater = false;
                this.waterContactTime = elapsedTime;
                if (this.hasBouncedOffWall)
                {
                    this.xVelocity_underwater = (.3)*this.xVelocity_afterBounce;
                    this.zVelocity_underwater = (.3)*this.zVelocity_afterBounce;
                }
                else{
                      this.xVelocity_underwater = (.3)*this.xVelocity;            //From here forward, xVelocity, zVelocity, and yVelocity act like initial velocities (velocities at moment of contact with water)
                      this.zVelocity_underwater = (.3)*this.zVelocity;
                }
                this.yVelocity_underwater = (.4)*this.yVelocity;
                this.airTimeDuration = this.waterContactTime - this.initialTime;
                this.x_coord_waterContact = this.x_coord;
                this.z_coord_waterContact = this.z_coord;
                this.y_coord_waterContact = this.y_coord;
            }
          
          let dt = 1/10;
          let fastestSink = -30;
          let hardFloor = true; //Hardcode depending on if the floor shoul act like sand or acting like concrete 

          if(Math.abs(this.xVelocity_underwater)>.4||Math.abs(this.zVelocity_underwater)>.4)
          {
          this.xVelocity_underwater *= .91;
          this.zVelocity_underwater *= .91;
          if(this.yVelocity_underwater<fastestSink)
          this.yVelocity_underwater *= .98;
          }
          else 
          this.xVelocity_underwater = this.zVelocity_underwater = 0;
          
           if (hardFloor && this.y_coord < this.yLowerBound)
              this.yVelocity_underwater *= .3;
           else if (this.y_coord < this.yLowerBound)
              this.yVelocity_underwater *= .98; 

          let new_x = this.x_coord + this.xVelocity_underwater*dt;
          let new_z = this.z_coord + this.zVelocity_underwater*dt;
          let new_y = this.y_coord + this.yVelocity_underwater*dt;

           let temp = this.cannonBall_transform.times(Mat4.translation([new_x - this.x_coord, new_y - this.y_coord, new_z - this.z_coord]));
           this.cannonBall_transform = temp;


          this.x_coord = new_x;
          this.y_coord = new_y; 
          this.z_coord = new_z;
        }   
    }
}



window.Project_Scene = window.classes.Project_Scene =
class Project_Scene extends Scene_Component
  { constructor( context, control_box, gl, text_canvas)      // The scene begins by requesting the camera, shapes, and materials it will need.
      { super(   context, control_box );    // First, include a secondary Scene that provides movement controls:
        //if( !context.globals.has_controls   )
          //context.register_scene_component( new Movement_Controls( context, control_box.parentElement.insertCell() , text_canvas) );
 
        const r = context.width/context.height;  //5 -10 -30

        this.camera_pos = Vec.of(-5, 10, 30); //camera pos in world coord -- hardcoded for now 

        context.globals.graphics_state.    camera_transform = Mat4.translation([ 5, -10, -30 ]);  // Locate the camera here (inverted matrix).
        context.globals.graphics_state.projection_transform = Mat4.perspective( Math.PI/4, r, .1, 1000 );
        
        this.proj_tr = context.globals.graphics_state.projection_transform;
        this.cam_tr = context.globals.graphics_state.    camera_transform;

        this.model_transform = Mat4.identity().times(Mat4.scale([0.25,0.25,0.25]))
                       .times(Mat4.rotation(Math.PI/4,Vec.of(1,0,0)))
                       .times(Mat4.rotation(-Math.PI/4,Vec.of(0,1,0)))
                       .times(Mat4.translation([-95,30,-60]));        

        this.inv_modl_tr = Mat4.inverse(this.model_transform);
        this.inv_cam_tr = Mat4.inverse(this.cam_tr);
        this.inv_proj_tr = Mat4.inverse(this.proj_tr); 

        this.gl = gl;
        
        this.ctx_2d = text_canvas.getContext("2d");
        this.ctx_drawn = false;
                                     // Make some Material objects available to you:
        this.clay   = context.get_instance( Phong_Shader ).material( Color.of( .9,.5,.9, 1 ), { ambient: .4, diffusivity: .4 } );
        this.white  = context.get_instance( Basic_Shader ).material();
        this.plastic = this.clay.override({ specularity: .6 });
        

        this.m_water = context.get_instance( Phong_Shader ).material( Color.of (0.0, 0.7, 1.0, 0.6), {ambient: 0.6, diffusivity: 1, specularity:0.5});
        this.m_tank = context.get_instance( Phong_Shader ).material( Color.of (0, 0, 1, 0.9), {ambient: 0.6, diffusivity: 0.1, specularity:0.5});
        this.m_tank_opaque = context.get_instance( Phong_Shader ).material( Color.of (0, 0, 1, 1), {ambient: 0.6, diffusivity: 0.1, specularity:0.5});        
        this.m_floor = context.get_instance( Texture_Caustic ).material( Color.of( 0,0,0,1 ), {ambient: 1, texture: context.get_instance("assets/floor.jpg", false)} );
        this.m_wall1 = context.get_instance( Texture_Caustic ).material( Color.of( 0,0,0,1 ), {ambient: 0.9,texture: context.get_instance("assets/sky.jpg", false)} );
        this.m_wall2 = context.get_instance( Texture_Caustic ).material( Color.of( 0,0,0,1 ), {ambient: 1,texture: context.get_instance("assets/sky.jpg", false)} );
        this.m_caustic = context.get_instance( Texture_Caustic ).material( Color.of( 0,0,0,1 ), {ambient: 0.4, texture: context.get_instance("assets/Caustic/target-0.png",false)} );
        this.m_gif_caustic = context.get_instance( Texture_Caustic ).material( Color.of( 0,0,0,1 ), {ambient: 0.4, texture: context.get_instance("assets/Caustic/target-0.png",false)} );
        this.m_duck = context.get_instance( Phong_Shader ).material( Color.of (1, 1, 0.4, 1), {ambient: 0.6, diffusivity: 0.7, specularity:0.7});
        this.m_shark = context.get_instance( Phong_Shader ).material( Color.of (0.4, 0.4, 0.4, 1), {ambient: 0.6, diffusivity: 0.5, specularity:0.1});
        this.m_beak = context.get_instance( Phong_Shader ).material( Color.of (1, 0.65, 0, 1), {ambient: 0.6, diffusivity: 0.7, specularity:0.7});
        this.m_cannon = context.get_instance( Phong_Shader ).material( Color.of (1, 0, 0, 1), {ambient: 0.6, diffusivity: 0.7, specularity:1});
        this.m_base = context.get_instance( Phong_Shader ).material( Color.of (1, 1, 0.5, 1), {ambient: 0.6, diffusivity: 0.7, specularity:0.7});
        this.m_wheels = context.get_instance( Phong_Shader ).material( Color.of (0, 0, 1, 1), {ambient: 0.6, diffusivity: 0.7, specularity:0.7});
        //this.m_cannonBall = context.get_instance( Phong_Shader ).material( Color.of (0.46, 0.46, 0.46, 1.0), {ambient: 0.5, diffusivity: 0.3, specularity:0.5});
        this.m_cannonBall = context.get_instance( Phong_Shader ).material( Color.of (1, 0, 0, 1.0), {ambient: 0.5, diffusivity: 0.3, specularity:0.5});

        
        this.caustic_counter = 0;
        this.caustic_update = true;

        this.lights = [ new Light( Vec.of( 0,5,5,1 ), Color.of( 1, .4, 1, 1 ), 100000 ), new Light( Vec.of( 0,5,5,-1 ), Color.of( 1, .4, 1, 1 ), 1000 ), new Light( this.model_transform.times(Vec.of( 100,5,80,1 )), Color.of( 1, .4, 1, 1 ), 100000 ),];

        this.set_colors();

        this.Swaying = true;
        this.Outline = false;
        this.Color_Array;
         
        this.rows = 70;
        this.columns = 70;
        this.width = 100;
        this.length = 80
        this.height = 40;
        this.edge_height = this.height/20;
        this.deltaX = this.width/this.rows;
        this.deltaZ = this.length/this.columns;
        this.currentTime = 0;
        this.timeSharkAdded = 0;
        this.dtime;

        this.numberOfWaveCenters = 0; //incremented every time the player causes a set of ripples, decremented after those ripples decay enough.
        this.Xcoords = [];
        this.Zcoords = [];
        this.radii = [];
        this.initialTimes = [];
        this.centerAmp = [];
        
        this.Height_Map = [];
        this.Perturbation_Map = [];
        this.Perturbation_Map_prev = [];
        
        this.allCannonBalls = [];
        this.numberOfCannonBalls = 0;
        this.activeCannonBalls = [];

        for(var i=0; i< this.rows; i++){
          let Row = [];
          for(var j=0; j< this.columns; j++){
            if(i>0 && i<this.rows-1 && j>0 && j<this.columns-1)
                Row.push(1*Math.random());    
            else
                Row.push(0);       
          }
          this.Height_Map.push(Row);  
        }

         for(var i=0; i< this.rows; i++){
          let Row = [];
          for(var j=0; j< this.columns; j++){
            Row.push(0.0);           
          }
          this.Perturbation_Map.push(Row);  
        }

        for(var i=0; i< this.rows; i++){
          let Row = [];
          for(var j=0; j< this.columns; j++){
            Row.push(0.0);           
          }
          this.Perturbation_Map_prev.push(Row);  
        }

        //this.projectile = new cannonBall([0,0,0], [1,1,1], 4, this.width*.86, this.length*.86, -this.height*.86, this.model_transform, this.currentTime );

        this.offsets = {
            duck: 4,
            shark: 2
        }

        this.duck_position = {x: this.width/2, y : this.length/2, width: 4, length: 4};
        this.duck_translation = Mat4.identity().times(Mat4.translation([this.duck_position.x,0,this.duck_position.y]));

        this.duck_sinking = false;
        this.duck_moving = true;
        this.duck_rotating = true;
        this.duck_speed = 1;//default 1

        //contains transform of duck (only translation relative to origin of pool, apply this.model_transform prior to this)
        this.goal_position = this.randomPosition(this.offsets.duck);
        this.goal =  Mat4.translation([this.goal_position.x,0,this.goal_position.y]);
        this.duck_angle = this.angle_between(this.duck_position, this.goal_position);
        this.cannon_angle = 0;
        this.cannonBallDest = null;


        //contains transform of shark (only translation relative to origin of pool, apply this.model_transform prior to this)
        this.corners = [ {x: this.offsets.shark, y: this.offsets.shark, width: 2, length: 4},
                         {x: this.width - this.offsets.shark, y: this.offsets.shark, width: 2, length: 4},
                         {x: this.offsets.shark, y: this.length - this.offsets.shark, width: 2, length: 4},
                         {x: this.width - this.offsets.shark, y: this.length - this.offsets.shark, width: 2, length: 4}, ]

        this.nSharks = 4; //initial/max # of sharks
        this.shark_positions = [];
        this.shark_transforms = [];
        this.shark_status = [];
        this.sharks_moving = true;
        this.default_shark_speed = 0.5;

        for(var i=0; i < this.nSharks; i++){
            this.addShark(this.corners[i],this.default_shark_speed);
        }

        this.shapes = {    'water': new ( Water.prototype.make_flat_shaded_version() ) (this.rows, this.columns, this.width, this.length, this.Height_Map),
                           'cannonBall': new (Subdivision_Sphere.prototype.make_flat_shaded_version() )(4), 
                           'tank_opaque': new Tank_Opaque(), 
                           'tank_transparent': new Tank_Transparent(),
                           'tank_edge': new Cube(),
                           'caustic': new Square(3),
                           'floor': new Square(4),
                           'wall': new Square(10),
                           'duck': new DuckBody(),
                           'shark': new Shark(),
                           'beak': new DuckBeak(),
                           'cannon': new CannonBody(),
                           'base': new CannonBase(),
                           'wheels': new CannonWheels()}
        this.context = context;
        this.submit_shapes( this.context, this.shapes );            // it would be redundant to tell it again.  You should just re-use
                                                          // the one called "box" more than once in display() to draw
                                                          // multiple cubes.  Don't define more than one blueprint for the
                                                          // same thing here.   
        this.minutes = 0;
        this.seconds = 0;
        this.timer = setTimeout(() => { this.addTime(); },1000);  
        this.shark_kills = 0;
        this.new_shark = 0;
        setTimeout(()=>{
            this.draw_time("#000");
            this.draw_kills("#000");
        },900);
        this.gif_ready = false;
        setTimeout(()=>{
            this.gif_ready = true;
        },20000);
          for(var i=0; i<100; i++){
    var img=new Image();
    img.src="assets/Caustic/target-" + i + ".png"; 
  }
  //preload images
        //this.newSharkTimer = setInterval(() => { this.addSharks(); },2000)


        
        ////////  PICKING CODE  /////////

   
       ///////////////////////// PRE BAKED COMPUTATION, COMPUTING POOL PLANE EQUATION  /////////////////
        
       this.A = this.model_transform.times(Mat4.scale([10,10,10])).times(Vec.of(0,0,0,1));
       this.B = this.model_transform.times(Mat4.translation([this.width,0,0])).times(Vec.of(0,0,0,1));
       this.C = this.model_transform.times(Mat4.translation([0,0,this.length])).times(Vec.of(0,0,0,1)); 

       this.A = Vec.of(this.A[0], this.A[1], this.A[2]);
       this.B = Vec.of(this.B[0], this.B[1], this.B[2]);
       this.C = Vec.of(this.C[0], this.C[1], this.C[2]);
    
       this.AB = this.B.minus(this.A);
       this.AC = this.C.minus(this.A);      
       this.n = this.AB.cross(this.AC);
        ///////////////////////////////////////////////////////////////////////////////////////////////////

        text_canvas.addEventListener("click", ( e, rect = text_canvas.getBoundingClientRect(), array_clk = this.array_clk ) =>  
                {
                     
                    if(this.duck_sinking) return;
                    let canv_coords = Vec.of( e.clientX - rect.left, e.clientY - rect.top, 0, 1 ); 
                    let plane_inter = this.unproject(canv_coords[0], canv_coords[1]);

                    var mod_point = Vec.of(plane_inter[0], plane_inter[1], plane_inter[2], 1);
                     mod_point = this.inv_modl_tr.times(mod_point);

                    if( 0 <= mod_point[0] && mod_point[0] <= this.width && 0 <= mod_point[2] && mod_point[2] <= this.length)
                    {
                        this.shootCannonBallToCoords(Math.floor(mod_point[0]), Math.floor(mod_point[2]));
                        this.cannonBallDest = { x: Math.floor(mod_point[0]), y: Math.floor(mod_point[2])};
                    }
                   } )


      }
      draw_time(color, clear=true){
         var timeText = this.get_timeText();
         if(clear) this.ctx_2d.clearRect(880,0,200,200);
         this.ctx_2d.fillStyle= color;
         this.ctx_2d.textAlign = "center";
         this.ctx_2d.font = "18px PixelFont";
         this.ctx_2d.fillText(timeText, 1000, 50);
      }
      get_timeText(){
         return (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") 
                          + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
      }
      draw_kills(color, clear=true){
         var text = "kills: " + this.shark_kills; 
         if(clear) this.ctx_2d.clearRect(0,0,200,200);
         this.ctx_2d.fillStyle= color;
         this.ctx_2d.font = "18px PixelFont";
         this.ctx_2d.fillText(text, 100, 50);
         this.ctx_2d.font = "14px PixelFont";
         this.ctx_2d.fillText("Protect the Duck!", 150, 520);
         this.ctx_2d.fillText("Click on the pool", 150, 550);
         this.ctx_2d.fillText("to shoot the cannon", 150, 580);
      }
    
      addTime(){
        this.seconds = this.seconds + 1;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes = this.minutes + 1;
            if (this.minutes >= 60) {
                this.minutes = 0;
            }
        }
        this.draw_time("#000");
        this.timer = setTimeout(() => { this.addTime(); },1000); 
      }


      unproject(i_x, i_y) //unprojects canvas coord and computes intersection with pool plane
      {     
            //Normalized Device Coordinates
            var nx = i_x / 1080 *2 -1;
            var ny = 1 - i_y / 600 *2;

            //4d homogeneous Clip coord
            var vec4Clip = Vec.of(nx, ny, -1.0, 1.0); // -Z is forward, W just needs to be 1.0 

            //4d Camera coords 
            var vec4Eye = Vec.of(0, 0, 0, 0);
            var matInvProj = this.inv_proj_tr;

            vec4Eye = matInvProj.times(vec4Clip);
            vec4Eye[2] = -1.0; //resets forward direction
            vec4Eye[3] = 0.0; //not a point


            //4d world coord
            var vec4World = Vec.of(0,0,0,0);
            vec4World = this.cam_tr.times(vec4Eye);

            //get normalized dir, from dir
            var ray = Vec.of(vec4World[0], vec4World[1], vec4World[2]);
            ray = ray.normalized();
            
            //get ray -- starts at camera position
            var raystart = this.camera_pos;
            
            //compute intersection with pool plane!
            var fact = (this.A.minus(raystart)).dot(this.n)/(ray.dot(this.n)); //COMPUTE FACTOR SO THAT RAY END IS ON POOL PLANE
            var rayend = raystart.plus(ray.times(fact));

            return rayend;
      }

       

      addShark(shark_position, speed){
            this.shark_positions.push({x: shark_position.x, y:shark_position.y, width: shark_position.width, length: shark_position.length});
            let shark_transform = Mat4.identity().times(Mat4.translation([shark_position.x,0,shark_position.y]))
            this.shark_transforms.push(shark_transform);
            this.shark_status.push({alive: true, speed: speed});
      }



      resetValues(){
        this.duck_position = {x: this.width/2, y : this.length/2, width: 4, length: 4};
        this.duck_translation = Mat4.identity().times(Mat4.translation([this.duck_position.x,0,this.duck_position.y]));

        this.duck_moving = true;
        this.duck_rotating = true;
        this.duck_speed = 1;//default 1

        this.goal_position = this.randomPosition(this.offsets.duck);
        this.goal =  Mat4.translation([this.goal_position.x,0,this.goal_position.y]);
        this.duck_angle = this.angle_between(this.duck_position, this.goal_position);
        this.cannon_angle = 0;
        this.cannonBallDest= null;

        this.nSharks = 4;
        this.shark_positions = [];
        this.shark_transforms = [];
        this.allCannonBalls = [];
        this.activeCannonBalls = [];
        this.numberOfCannonBalls = 0;
        this.shark_status = [];
        this.sharks_moving = true;
        this.shark_speed = 2;
        this.shark_kills = 0;
        this.new_shark = 0;
        this.timeSharkAdded = this.currentTime;

        for(var i=0; i < this.nSharks; i++){
            this.addShark(this.corners[i], this.default_shark_speed);
        }

        this.duck_sinking = false;
        this.ctx_drawn = false;

        this.seconds = 0;
        this.minutes = 0;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => { this.addTime(); },1000); 
        this.draw_time("#000");
        this.draw_kills("#000");
   
      }


      //generates random position d manhattan distance away from position
      randomPosition(offset){
          let randomX = offset + parseInt(Math.random()*(this.width-2*offset));
          let randomY = offset + parseInt(Math.random()*(this.length-2*offset));
          return {x: randomX, y: randomY, width: 4, length: 4}
      }

      defaultChangeHeightMap()
      {
        for(var i = 0; i < this.rows; i++)
          for(var j = 0; j < this.columns; j++)
          {

            let phase = i*(2*Math.PI/this.rows);
            let phase2 = j*(2*Math.PI/this.columns);
            if(i>0 & i<this.rows-1 && j>0 & j<this.columns-1)
                this.Height_Map[i][j] = this.Height_Map[i][j] - .05*Math.sin(phase + 4.5*this.currentTime);                                                                  
          }

           
      }

      convertIndicesToHorizontalCoordinates (xIndex, zIndex)
      {
         return [xIndex*this.deltaX, zIndex*this.deltaZ];
      }
      convertHorizontalCoordinatesToIndices (x_coord, z_coord)
      {
          return [parsInt(x_coord/this.deltaX), parsInt(z_coord/this.deltaZ)]
      }

      actualDistanceFunction(x1,z1, x2,z2)
      {
        return Math.sqrt(((this.deltaX)**2)(x1-x2)**2+((this.deltaZ)**2)(z1-z2)**2);
      }
      indexDistanceFunction(i,j, a,b)
      {
        return Math.sqrt((i-a)**2+(j-b)**2);
      }

      //all initially 0, that is, for any i and j, Height_Map[i][j] = 0.
      //Given that the vertex [a][b] is depressed at some time t_0 by some distance h...
      clickChangePerturbationMap(clickX,clickZ, radius, t_0, maxHeight)  //the t_0 is the time a particular began.
      {
        let relativeTime = 1.4*(this.currentTime - t_0); //time that the wave functions operate by.
        if (relativeTime > 0)
        {
            let freq = 4.7;     //Technically, frequency is actually freq/(2*pi) 
            if (freq*relativeTime < 2*Math.PI)
           this.Perturbation_Map[clickX][clickZ] = -maxHeight*Math.sin(freq*relativeTime);
            else
            this.Perturbation_Map[clickX][clickZ] = -0.5*maxHeight*Math.sin(freq*relativeTime);

          for(var i = 0; i<this.rows; i++)
            for(var j = 0; j<this.columns; j++)
            { 

              let  Distance = this.indexDistanceFunction(i,j, clickX,clickZ);

              if((i==clickX && j==clickZ)||Distance>=radius)
                continue;

               let timeScalingFactor = 0.3; 
               let timeDelay = Distance*timeScalingFactor; 
               let Ampl = (2.2*maxHeight)/Distance;
               let currVertexTime = relativeTime - timeDelay;
               let timeDiff = currVertexTime - relativeTime;
                
                if (Distance<radius && Distance <= 2*Math.sqrt(2) && relativeTime>=timeDelay)
                {

                 if(freq*currVertexTime < 2*Math.PI)
                 this.Perturbation_Map[i][j] += -(2*Math.PI - currVertexTime*1.3)*Math.sin((freq + 0.2)*currVertexTime );
                 else
                 this.Perturbation_Map[i][j] += -.4*maxHeight*Math.sin(freq*currVertexTime);
                }
                 else if (Distance<radius && relativeTime>=timeDelay)
                {
                 let currVertexTime = relativeTime - timeDelay;
                 this.Perturbation_Map[i][j] += -Ampl*Math.sin(freq*currVertexTime);
                }
            }
        }
      }

    decreaseAmplitudes()
    {
     for (var i = 0; i<this.numberOfWaveCenters; i++)
     {
         if(this.currentTime>this.initialTimes[i]) 
      this.centerAmp[i] = this.centerAmp[i] * 0.981;
     }
    }

   pushNewClickInfo(Xcoord, Zcoord, initialTime, centerAmp)      //Uses x and z indices, not coordinates!
      {
        this.Xcoords.push(Xcoord);
        this.Zcoords.push(Zcoord);
        this.initialTimes.push(initialTime);
        this.centerAmp.push(centerAmp);
        this.radii.push(centerAmp*9);
        this.numberOfWaveCenters += 1;
      }

    copyCurrPerturbationToPrev()
    {
      for(var i = 0; i<this.rows; i++)
      for(var j = 0; j<this.columns; j++)
      this.Perturbation_Map_prev[i][j] = this.Perturbation_Map[i][j];
    }

    resetCurrPerturbation()
    {
      for(var i = 0; i<this.rows; i++)
      for(var j = 0; j<this.columns; j++)
      this.Perturbation_Map[i][j] = 0;
    }

    copyCurrPerturbationToPrevAndReset()
    {
        for(var i = 0; i<this.rows; i++)
        for(var j = 0; j<this.columns; j++)
        {
            this.Perturbation_Map_prev[i][j] = this.Perturbation_Map[i][j];
            this.Perturbation_Map[i][j] = 0;
        }
    }


    collectCurrPerturbations()  //automatically gets rid of insignificant waves
    {
        for (var wave = 0; wave<this.numberOfWaveCenters; wave++)
        {
            if (this.centerAmp[wave] < 0.08)
            {
               this.eliminateWave(wave);
               wave--;
            }
            else
            this.clickChangePerturbationMap(this.Xcoords[wave], this.Zcoords[wave], this.radii[wave], this.initialTimes[wave], this.centerAmp[wave]);
        }
    }

   eliminateWave(index)
    {        
        this.Xcoords.splice(index,1) ;     //override the entry at index with the last entry and forget the last entry
        this.Zcoords.splice(index,1) ;
        this.radii.splice(index,1);
        this.initialTimes.splice(index,1) ;
        this.centerAmp.splice(index,1) ;
        this.numberOfWaveCenters -= 1;
     }


    setHeightMap()
        {
          for (var r = 0; r<this.rows; r++)
          for (var c = 0; c<this.columns; c++)
          {
            this.Height_Map[r][c] += (this.Perturbation_Map[r][c] - this.Perturbation_Map_prev[r][c]);  //add difference to height map
          }
        }


        ///////////////////////////////////////////
        //CANNONBALL STUFF BELOW
        ////////////////////////////////////////////
initializeCannonballTransforms()
 {
     for (var c = 0; c < this.numberOfCannonBalls; c++)
     this.allCannonBalls[c].cannonBall_transform = this.model_transform;
 }


drawAllCannonBalls(graphics_state)
{
   let cannonBallLaunchTime = this.currentTime;
   for (var c = 0; c < this.numberOfCannonBalls; c++)
      {
        if (this.allCannonBalls[c].initialTime <= cannonBallLaunchTime && !(this.allCannonBalls[c].x_coord > this.width || this.allCannonBalls[c].z_coord > this.length))     //This line ensures that a cannonball is not drawn and, worse, updated based on a negative time.
        {
          this.shapes.cannonBall.draw( graphics_state, this.allCannonBalls[c].cannonBall_transform, this.m_cannonBall);
          this.allCannonBalls[c].veloAndPosUpdate(cannonBallLaunchTime);
        }
      } 
}



/////////////////////////////////////////////////////
//CANNONBALL AND WAVE PAIRED TOGETHER
////////////////////////////////////////////////////
    shootCannonBallToCoords(clickX, clickZ)
    {
        let cannonBallOrigin = [0,5,0];
        let cannonBallDestination = [clickX,0,clickZ]; 
        let cannonBallDestinationIndices = [parseInt(clickX/this.deltaX), 0, parseInt(clickZ/this.deltaZ)]; //Note the y value is actually not an index,
                                                                                                                //just the x and z values, elements 0 and 2 of the array, are.
        let timeDurrationDistanceScale = (1/100);
        let distanceDependentTimeDuration = true;
        let cannonFireTimeDelay = 0.1;

        if (distanceDependentTimeDuration)
        {
            let distBetweenCannonBallOriginAndDestination = this.indexDistanceFunction(cannonBallOrigin[0], cannonBallOrigin[2], cannonBallDestination[0], cannonBallDestination[2]);
            let cannonBallAirtime = timeDurrationDistanceScale*distBetweenCannonBallOriginAndDestination;
            let heightDependentSplashFactor = 0;
            let splashHeight = 3 + heightDependentSplashFactor*distBetweenCannonBallOriginAndDestination;
            let waveStartTime = this.currentTime + cannonBallAirtime;   

            this.allCannonBalls.push(new cannonBall(cannonBallOrigin, cannonBallDestination, cannonBallAirtime, this.rows*this.deltaX, this.columns*this.deltaZ, -.9*this.height, this.model_transform, this.currentTime + cannonFireTimeDelay)); 
            this.activeCannonBalls.push(this.numberOfCannonBalls);
            this.numberOfCannonBalls++;
            this.pushNewClickInfo(cannonBallDestinationIndices[0], cannonBallDestinationIndices[2], waveStartTime + cannonFireTimeDelay, splashHeight);
         }
        else
        {     
            let commonAirTimeForAllCannonballs = 3;
            this.allCannonBalls.push(new cannonBall(cannonBallOrigin, cannonBallDestination, commonAirTimeForAllCannonballs, this.rows*this.deltaX, this.columns*this.deltaZ, -.9*this.height, this.model_transform, this.currentTime + cannonFireTimeDelay)); 
            this.numberOfCannonBalls++;
            this.pushNewClickInfo(cannonBallDestinationIndices[0], cannonBallDestinationIndices[2], waveStartTime + cannonFireTimeDelay, splashHeight);
        }
    }
    

    set_colors() {
          // TODO:  Create a class member variable to store your cube's colors.

          this.Color_Array = Array();
          //i = 0
          var prevR = Math.random();
          var prevG = Math.random();
          var prevB = Math.random();

          this.Color_Array.push(Color.of(prevR, prevG, prevB, 1));

          for (var i = 1; i < 8; i++)
          {
              var currR = Math.random();
              var currG = Math.random();
              var currB = Math.random();

              while( (prevR == currR) || (prevG == currG) || (prevB == currB) )
              {
                  currR = Math.random();
                  currG = Math.random();
                  currB = Math.random();
              }

              this.Color_Array.push(Color.of(currR, currG, currB, 1));

              prevR = currR;
              prevG = currG;
              prevB = currB;


          }
      }

       make_control_panel()            
       {  

            this.key_triggered_button( "Restart", ["x"], () => {
                this.ctx_2d.clearRect(0,0,1080,600);
                this.resetValues();

            })


           
      }

    draw_box( graphics_state, model_transform, color_box )  // SO THAT EXTRA CREDIT 2 IS FULFILLED
      {
        // TODO:  Helper function for requirement 3 (see hint).
        //        This should make changes to the model_transform matrix, draw the next box, and return the newest model_transform.
        let max_angle = 0.04*Math.PI;
        //Get time -- in seconds
        const t = this.t = graphics_state.animation_time/1000;

        if (this.Swaying)
        {
          model_transform = model_transform.times(Mat4.translation([1,1,0])).times( Mat4.rotation(-Math.abs(max_angle*Math.sin(9*t)) , Vec.of( 0,0,1 ))).times(Mat4.translation([-1,1,0]));
        }
        else 
        {
          model_transform = model_transform.times(Mat4.translation([1,1,0])).times( Mat4.rotation(-max_angle , Vec.of( 0,0,1 ))).times(Mat4.translation([-1,1,0])); 
        }
        if (this.Outline)
          this.shapes.outline.draw( graphics_state, model_transform, this.white, "LINES" );
         else 
          this.shapes.box.draw( graphics_state, model_transform, this.plastic.override({ color: color_box })); 

        return model_transform;
      }

    collision_between(rect1, rect2){
        let rect1x = rect1.x - rect1.width/2;
        let rect1y = rect1.y - rect1.length/2;
        let rect2x = rect2.x - rect2.width/2;
        let rect2y = rect2.y - rect2.length/2;
        return (rect1x < rect2x + rect2.width &&
        rect1x + rect1.width > rect2x &&
        rect1y < rect2y + rect2.length &&
        rect1y + rect1.length > rect2y);
    }
    
    angle_between(position1, position2){
        let diffX = position1.x - position2.x;
        let diffY = position2.y - position1.y ;
        var ratio = diffY == 0 ? 0 : diffY/diffX;
        var angle = diffX < 0 ? Math.PI + Math.atan(ratio) : Math.atan(ratio); 
        return angle;   
    }
    
    draw_skybox(graphics_state){
        //let box_transform = this.
        const scaling = 5;
        //this.shapes.wall.draw( graphics_state, this.model_transform.times(Mat4.rotation(Math.PI/2,Vec.of(0,0,1))).times(Mat4.translation([this.width,this.length/2],1)).times(Mat4.scale([this.width*3,this.length*3,1])), this.m_floor );  
        this.shapes.wall.draw( graphics_state, this.model_transform.times(Mat4.rotation(-Math.PI/2,Vec.of(0,0,1))).times(Mat4.scale([this.length*scaling,1,this.length*scaling])).times(Mat4.translation([-1 + this.height/(scaling*this.length),-this.width*1.5,0.11])).times(Mat4.rotation(-Math.PI/2,Vec.of(0,1,0))), this.m_wall1 ); 
        this.shapes.wall.draw( graphics_state, this.model_transform.times(Mat4.rotation(Math.PI/2,Vec.of(1,0,0))).times(Mat4.scale([this.width*scaling,1,this.length*scaling])).times(Mat4.translation([0,-this.width*1.5,-1 + this.height/(scaling*this.length)])).times(Mat4.rotation(-Math.PI,Vec.of(0,1,0))), this.m_wall2 );  
        this.shapes.floor.draw( graphics_state, this.model_transform.times(Mat4.translation([this.width,this.edge_height-this.height-0.01,this.length/2])).times(Mat4.scale([this.width*3,1,this.length*3])), this.m_floor );  
    }
    draw_gameOver(){
         this.ctx_drawn = true;
         this.ctx_2d.fillStyle="rgba(0.5,0.5,0.5,0.5)";
         this.ctx_2d.fillRect(0,0,1080,600);
         this.ctx_2d.strokeRect(0,0,1080,600);
         //this.ctx_2d.fill();
         //this.ctx_2d.stroke();
         this.ctx_2d.fillStyle="#fff";
         this.ctx_2d.font = "30px PixelFont";
         this.ctx_2d.textAlign = "center";
         this.ctx_2d.fillText("GAME OVER", 540, 300);
         this.ctx_2d.font = "18px PixelFont";
         this.ctx_2d.fillText("Press x to restart", 540, 350);
         this.ctx_2d.font = "14px PixelFont";
         this.ctx_2d.fillText("time - " + this.get_timeText(), 540, 400);
         this.ctx_2d.fillText("kills - " + this.shark_kills, 540, 420);
         this.ctx_2d.fillText("shots fired - " + this.numberOfCannonBalls, 540, 440);
         let accuracy = this.numberOfCannonBalls == 0 ? "N/A" : parseInt(100*this.shark_kills/this.numberOfCannonBalls) + "%"
         this.ctx_2d.fillText("accuracy - " + accuracy, 540, 460);
    }
    draw_duck(graphics_state){
        let rotation = Mat4.identity();
        if(this.duck_sinking){
            rotation = Mat4.rotation(-Math.PI/3, Vec.of(1,0,0));
            let bottom = Mat4.translation([this.duck_position.x, 2-this.height, this.duck_position.y]).times(rotation);
            this.duck_translation = bottom.map((x,i) => Vec.from( this.duck_translation[i] ).mix( x, 0.04 ));
        }else if(this.duck_moving){
            this.duck_translation = this.goal.map((x,i) => Vec.from( this.duck_translation[i] ).mix( x, 0.01*this.duck_speed ));
            let angle = this.angle_between(this.duck_position, this.goal_position);
            this.duck_angle = (1-0.1*this.duck_speed)*this.duck_angle + 0.1*this.duck_speed*angle;
            this.duck_position.x = this.duck_translation[0][3];
            this.duck_position.y = this.duck_translation[2][3];
            if(this.collision_between(this.duck_position, this.goal_position)){
                this.goal_position = this.randomPosition(this.offsets.duck);
                this.goal = Mat4.translation([this.goal_position.x,0,this.goal_position.y]);
            }    
        }
         rotation = Mat4.rotation(this.duck_angle, Vec.of(0,1,0));
         let duck_transform = this.model_transform.times(this.duck_translation);
         if(!this.duck_sinking) duck_transform = duck_transform.times(rotation);
         this.shapes.duck.draw( graphics_state, duck_transform, this.m_duck);
         this.shapes.beak.draw( graphics_state, duck_transform, this.m_beak);
    }

    draw_sharks(graphics_state){
         var remove_sharks = new Set();
         for(var s=0; s < this.shark_positions.length; s++){
            let current_shark_position = this.shark_positions[s];
            let current_shark_transform = this.shark_transforms[s];
            //calculate angle of shark to duck
            let angle = this.angle_between(this.duck_position, current_shark_position);
            let shark_rotation= Mat4.rotation(angle, Vec.of(0,1,0));
            if(!this.shark_status[s].alive){
                let rotation = Mat4.rotation(-Math.PI/3, Vec.of(1,0,0));
                let bottom = Mat4.translation([current_shark_position.x, 2-this.height/4, current_shark_position.y]).times(rotation);
                this.shark_transforms[s] = bottom.map((x,i) => Vec.from( this.shark_transforms[s][i] ).mix( x, 0.04 ));
                if(this.shark_transforms[s][1][3] - bottom[1][3] < 1){
                  //marks shark s for removal
                  remove_sharks.add(s);
                }
            }else if(this.sharks_moving){
                //update transform 
                this.shark_transforms[s] = this.duck_translation.map( (x,i) => Vec.from( current_shark_transform[i] ).mix( x, 0.01*this.shark_status[s].speed ));
                //update position, check collision
                this.shark_positions[s].x = this.shark_transforms[s][0][3];
                this.shark_positions[s].y = this.shark_transforms[s][2][3];
                if(this.collision_between(this.shark_positions[s], this.duck_position)){
                    this.sharks_moving = false;
                    this.duck_sinking = true;
                }

            }
            //apply transforms to draw shark
            let shark_transform = this.model_transform.times(this.shark_transforms[s]).times(shark_rotation);
            this.shapes.shark.draw( graphics_state, shark_transform, this.m_shark);
            //remove dead sharks 
         }
         remove_sharks.forEach((shark)=>{
            this.shark_positions.splice(shark,1);
            this.shark_transforms.splice(shark,1);
            this.shark_status.splice(shark,1);
            //this.nSharks = this.nSharks - 1;
         })
    }
    draw_cannon(graphics_state, cannon_transform){
         if(this.cannonBallDest){
            let angle = this.angle_between({x:0,y:0}, this.cannonBallDest);
            this.cannon_angle = (1-0.5)*this.cannon_angle + 0.5*angle;             
         }

         let rotation = Mat4.rotation(this.cannon_angle - Math.PI/2, Vec.of(0,1,0));
         cannon_transform = cannon_transform.times(rotation);
            
         this.shapes.cannon.draw( graphics_state, cannon_transform, this.m_cannon);
         this.shapes.base.draw( graphics_state, cannon_transform, this.m_base);
         this.shapes.wheels.draw( graphics_state, cannon_transform, this.m_wheels);
    }


    display( graphics_state )
      { graphics_state.lights = this.lights;        // Use the lights stored in this.lights.
  
        const t = graphics_state.animation_time / 1000, dt = graphics_state.animation_delta_time / 1000;
        this.currentTime = t, this.dtime = dt;


       this.copyCurrPerturbationToPrevAndReset();
       this.defaultChangeHeightMap();
       

          this.collectCurrPerturbations();
          this.decreaseAmplitudes();       
        
           if (t==0)
           {
                //this.pushNewClickInfo(10,20,5,3);
           }
  

        this.setHeightMap();
        
        



         //CREATE NEW WATER SHAPE 
         this.shapes.water = new ( Water.prototype.make_flat_shaded_version() ) (this.rows, this.columns, this.width, this.length, this.Height_Map);  
         this.shapes.water.send_water(this.gl);
         
         //DRAW OPAQUE ITEMS OBJECTS
         let cannon_transform = this.model_transform.times(Mat4.translation([2.5,8+this.edge_height,2.5])).times(Mat4.rotation(0,Vec.of(0,1,0)));
         this.draw_skybox(graphics_state);
         this.draw_duck(graphics_state);
         this.draw_sharks(graphics_state);
         this.draw_cannon(graphics_state, cannon_transform);

         if (this.caustic_counter == 99)
            this.caustic_counter = 0;
        
        if(this.caustic_update)
        {
            this.caustic_counter += 1;
            this.caustic_update = false;
        }
        else
            this.caustic_update = true;

         var caustic_str = "assets/Caustic/target-" + this.caustic_counter.toString() +  ".png";
         
         if(!this.gif_ready){
            this.shapes.caustic.draw( graphics_state, this.model_transform.times(Mat4.translation([this.width/2,this.edge_height-this.height,this.length/2])).times(Mat4.scale([this.width/2,1,this.length/2])), this.m_gif_caustic.override({texture: this.context.get_instance(caustic_str,false)}));   
            this.shapes.caustic.draw( graphics_state, this.model_transform.times(Mat4.translation([this.width/2,this.edge_height-this.height + 0.1,this.length/2])).times(Mat4.scale([this.width/2,1,this.length/2])), this.m_caustic);   
         }else{
             this.shapes.caustic.draw( graphics_state, this.model_transform.times(Mat4.translation([this.width/2,this.edge_height-this.height,this.length/2])).times(Mat4.scale([this.width/2,1,this.length/2])), this.m_caustic);   
             this.shapes.caustic.draw( graphics_state, this.model_transform.times(Mat4.translation([this.width/2,this.edge_height-this.height + 0.1,this.length/2])).times(Mat4.scale([this.width/2,1,this.length/2])), this.m_gif_caustic.override({texture: this.context.get_instance(caustic_str,false)}));   
         }
         this.shapes.tank_opaque.draw( graphics_state, this.model_transform.times(Mat4.translation([this.width/2,-this.height/2,this.length/2])).times(Mat4.scale([this.width/2,this.height/2,this.length/2])), this.m_tank_opaque);
         this.shapes.tank_edge.draw( graphics_state, this.model_transform.times(Mat4.translation([this.width/2,this.edge_height,this.length/2])).times(Mat4.scale([this.width/2,this.edge_height,this.length/2])), this.m_tank, );
      



           //PROJECTILE cannonBall 
         if (t==0)
         this.initializeCannonballTransforms();

         this.drawAllCannonBalls(graphics_state);
         
        this.inactiveCannonBalls = [];
         for(var c=0; c < this.activeCannonBalls.length; c++){ //for all active cannonballs, check collsions
            let cannonBall = this.allCannonBalls[this.activeCannonBalls[c]];
            if(!cannonBall.collided && cannonBall.y_coord <= 0 && !this.duck_sinking){
                cannonBall.collided= true;
                this.inactiveCannonBalls.push(c); //mark cannonball c for removal from active cannonballs
                let cannonball_position = {x: cannonBall.x_coord, y: cannonBall.z_coord, width: 8, length: 8};
                for(var s=0; s< this.shark_positions.length; s++){
                    if(this.shark_status[s].alive){
                        let shark_position = this.shark_positions[s];
                        if(this.collision_between(shark_position, cannonball_position)){
                            this.shark_status[s].alive = false;
                            this.shark_kills = this.shark_kills + 1;
                            this.draw_kills("#000");
                        }
                    }
                }  
            }
         }
         for(var c=0; c< this.inactiveCannonBalls.length; c++){
             this.activeCannonBalls.splice(this.inactiveCannonBalls[c],1);
         }


         this.shapes.tank_transparent.draw( graphics_state, this.model_transform.times(Mat4.translation([this.width/2,-this.height/2,this.length/2])).times(Mat4.scale([this.width/2,this.height/2,this.length/2])), this.m_water);         
         //THEN DRAW WATER/OTHER TRANSPARENT OBJECTS
         this.shapes.water.draw( graphics_state, this.model_transform, this.m_water, "TRIANGLE_STRIP" );


         if(this.duck_sinking && !this.ctx_drawn){
            this.draw_gameOver();
            //this.draw_time("#fff",false);
            //this.draw_kills("#fff",false);
            clearTimeout(this.timer);
         }else{
             //if the game isn't over, at a certain interval add sharks to the pool
             if(this.currentTime - this.timeSharkAdded >= 1){
                if(this.shark_positions.length < this.nSharks){
                    let newSpeed = this.default_shark_speed + (this.shark_kills/10);
                    if( newSpeed > 5) newSpeed = 5;
                    this.addShark(this.corners[this.new_shark%4], newSpeed);
                    this.timeSharkAdded = this.currentTime; //necessary for above, update "timeLastFrame" for next frame
                    this.new_shark = this.new_shark + 1;
                }
             }

         }
     

      }
  }
  