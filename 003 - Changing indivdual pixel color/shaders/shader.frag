#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    // gl_FragCoord is a gloabl variable that contains the current pixel we're working on coordinates
    // Normalize the x and y values to go from 0.0 to 1.0 to map it to color values
    // So instead of x going from 0 to 500, it'll go from 0.0 to 1.0
    vec2 st = gl_FragCoord.xy/u_resolution;

    // Red channel pixels will be affected by x value 
    // Blue channel pixels will be affected by y value 
    gl_FragColor = vec4(st.y,0.0,st.x,1.0);

}