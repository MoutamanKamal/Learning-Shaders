#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main(){

    gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
    // Change the speed of color change
    // gl_FragColor = vec4(abs(sin(u_time*5.0)),0.0,0.0,1.0);
}