import React, {Component} from 'react';
import { TweenMax, Power2,TimelineLite} from 'gsap/all';
class IntroTween extends Component {
   constructor(props){
        super(props);
        this.timelineLite = new TimelineLite({});
        this.introTween = [];
    }
    componentDidMount(){
    	this.timelineLite.staggerFrom(this.introTween,1,{autoAlpha:0,x:-20},.3)
    }
    render() {
        const elementsArray = [
            {id:1, info: 'Hello my name is Christian Arellano'},
            {id:2, info:'I am a Frontend Developer seeking for a full-time job in a well established organization where I can enhance my knowledge and provide outstanding results with a growing team.' },
            {id:3, info:'I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.'},
        ]
        return (
            <div style = {{
                display: 'flex', alignItems: 'center', margin: ' 0 auto',
                 width: '100%', height: '100%'
            }}>
                <ul>
                    {elementsArray.map((element,index) => (
                        <li  key = {element.id} ref = {li => this.introTween[index] = li}
                            style = {{listStyle: 'none',padding: '10px',margin:'10px',fontSize: '30px', position: 'relative', 
                            color: 'tomato'

                        }}
                        >
                            {element.info}
                        </li> ))}
                </ul>
            </div>
        );
    }
}

export default IntroTween;
