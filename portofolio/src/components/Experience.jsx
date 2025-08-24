import { TextEffectOne } from 'react-text-animate'; 
import { experienced, organizational } from '../const/exp';


export default function Experience() {
  const contentStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '30px',
    color: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: '60px'
  };

  const imageStyle = {
    width: '480px',
    height: '290px',
    borderRadius: '8px',
    objectFit: 'cover',
    flexShrink: 0
  };

  const textContainerStyle = {
    maxWidth: '600px',
    textAlign: 'left',
    color:'#ffc1cc'
  };

  return (
    <section style={{ padding: '60px 20px' }}>
      <TextEffectOne
        text="Work Experience"
        style={{
          color: '#e75480',
          fontWeight: 'bold',
          fontSize: '30px',
          paddingBottom: '40px'
        }}
      />
      {experienced.map((exp, index) => (
        <div key={index} style={contentStyle}>
          <img src={exp.img} alt={exp.title} style={imageStyle} />
          <div style={textContainerStyle}>
            <h3 style={{ fontWeight: 'bold' }}>{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        </div>
      ))}

      <TextEffectOne
        text="Organizational Experience"
        style={{
          color: '#e75480',
          fontWeight: 'bold',
          fontSize: '30px',
          paddingBottom: '40px'
        }}
      />
      {organizational.map((org, index) => (
        <div key={index} style={contentStyle}>
          <img src={org.img} alt={org.title} style={imageStyle} />
          <div style={textContainerStyle}>
            <h3 style={{ fontWeight: 'bold' }}>{org.title}</h3>
            <p>{org.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}