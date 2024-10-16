import React, {useState} from 'react';

const DashboardSub = ({title='default subdashborad9874',desc='defualt notify people notes can be enabled'}) => {
  
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = desc;

  if (!showFullDescription) {
    description = description.substring(0, 9) + '...';
  }
    return (
    <div className='bg-gray-100 p-6 rounded-lg'>
      <h2 className="text-2xl">{title}</h2>
      <p>Welcome to the {description}!</p>
      <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>
    </div>
  );
};

export default DashboardSub;
