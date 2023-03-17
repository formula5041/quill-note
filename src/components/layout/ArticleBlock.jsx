import './ArticleBlock.css'
import Button from '../nextui/Button'
import Text from '../nextui/Text'
import { FaApple, FaAmazon, FaTwitter, FaGithub } from "react-icons/fa";
import { GiClick } from "react-icons/gi";


const App = (props) => {
  let IconStyle = <FaApple size={36}/>
  if(props.icon === 'FaApple') {
    IconStyle = <FaApple size={36}/>
  } else if (props.icon === 'FaAmazon') {
    IconStyle = <FaAmazon size={36}/>
  } else if (props.icon === 'FaTwitter') {
    IconStyle = <FaTwitter size={36}/>
  } else if (props.icon === 'FaGithub') {
    IconStyle = <FaGithub size={36}/>
  }

  return (
    <div className="container-style">
      <div className='content-icon-style'>
        {IconStyle}
      </div>
      <div className='content-info-style'>
        <Text
          className='title-style'
          h2={true}
          text={props.title}
          css={{
            margin: '0px 10px',
          }}
        />
        <Text
          h5={true}
          text={props.content}
          css={{
            margin: 20
          }}
        />
        <Button
          bordered={true}
          shadow={true}
          rounded={true}
          size='sm'
          color='success'
          icon={<GiClick size={16}/>}
          iconName='Read more'
        />
      </div>
    </div>
  )
}

export default App