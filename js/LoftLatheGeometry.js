	/**
	 * @author cotterzz / https://github.com/cotterzz
	 * this class adapted from THREE.LatheGeometry by:
	 * @author zz85 / https://github.com/zz85
	 * @author bhouston / http://clara.io
	 * @author Mugen87 / https://github.com/Mugen87
	 */

	// LoftLatheGeometry

class LoftLatheGeometry extends THREE.Geometry{
	constructor( points, segments, phiStart, phiLength ){
		super();

		this.type = 'LoftLatheGeometry';

		this.parameters = {
			points: points,
			segments: segments,
			phiStart: phiStart,
			phiLength: phiLength
		};

		this.fromBufferGeometry( new LoftLatheBufferGeometry( points, segments, phiStart, phiLength ) );
		this.mergeVertices();
	}

}


