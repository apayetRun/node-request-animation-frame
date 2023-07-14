
class NodeAnimationFrame
{
	constructor()
	{
		this.frame_rate = 60;
		this.frame_number = 0;
		this.game_active = false;
		this.requestFrame = (callback_function) =>
		{
			if (this.frame_number === (Number.MAX_VALUE - 1))
				this.frame_number = 0;
			setTimeout(() => 
			{
				callback_function(performance.now());
			}, 1000 / this.frame_rate);
		}
		this.callback_function = undefined;
		this.update = (timestamp) =>
		{
			if ((this.callback_function === undefined)
				&&!(this.callback_function instanceof Function))
				return (console.error("Error : no callback function provided"));
			this.callback_function(timestamp, this.frame_number);
			this.frame_number++;
			this.requestFrame(this.update);
		}
	}
}

export default NodeAnimationFrame;
