// @flow
import React, { Component } from 'react';
import * as winwheel from '@evshiron/winwheel.js';
import uniqid from 'uniqid';

export default class WinWheel extends Component {
	
	componentDidMount() {
		this.winwheel = new winwheel.Winwheel({
			canvasId: this.el.id,
			numSegments: 4,
			segments:
			[
				{'fillStyle' : '#eae56f', 'text' : 'Prize One'},
				{'fillStyle' : '#89f26e', 'text' : 'Prize Two'},
				{'fillStyle' : '#7de6ef', 'text' : 'Prize Three'},
				{'fillStyle' : '#e7706f', 'text' : 'Prize Four'}
			],
			animation:{
				type: 'spinToStop',
				duration: 20,
				spins: 8,
				callbackFinished: () => {
					if (this.props.onStop) this.props.onStop();
				}
			}
		});
	}

	componentWillUnmount() {
		// this.$el.somePlugin('destroy');
	}

	spin() {
		this.winwheel.stopAnimation(false);
		this.winwheel.rotationAngle = this.winwheel.rotationAngle % 360;
		this.winwheel.startAnimation();
    }

	render() {
		return (
			<canvas id={uniqid()} ref={el => this.el = el}>winwheel</canvas>
		);
	}
}
