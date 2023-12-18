import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import techVideo from "../../videos/SwiftVideo.mp4"
import pic1 from "../../images/Swift1smallImage.png"
import pic2 from "../../images/Swift2smallImage.png"
import pic3 from "../../images/Swift3smallImage.png"
import pic4 from "../../images/Swift4smallImage.png"
import chart from "../../images/SwiftChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { FaSwift } from 'react-icons/fa'

function Swift() {
	const { lang } = useContext(Context)

	return (
		<div>

			<ModelTechPicture
				title={`${trans[lang].SwiftTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].SwiftText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].SwiftSmallText1}`}
				text2={`${trans[lang].SwiftSmallText2}`}
				text3={`${trans[lang].SwiftSmallText3}`}
				text4={`${trans[lang].SwiftSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].SwiftText2}`}
				chart={chart}
				logo={<FaSwift />}
			/>

		</div>
	)
}

export default Swift