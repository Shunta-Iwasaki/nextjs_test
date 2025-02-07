import React from 'react'

type FeatureCardProps = {
    title: string;
    content: string;
    textColor: string;
};

const FeatureCard = ({title, content, textColor}: FeatureCardProps) => {
  return (
    <div className='border p-2'>
        <h3 className='font-bold' style={{color:textColor}}>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default FeatureCard