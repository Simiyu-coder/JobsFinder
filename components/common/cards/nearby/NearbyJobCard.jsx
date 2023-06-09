import { View, Text, TouchableOpacity,Image } from 'react-native'

import styles from './nearbyjobcard.style';

import { checkImageURL } from '../../../../utils';


const NearbyJobCard = (job, handleNavigate) => {
  return (
   <TouchableOpacity style={styles.container} onPress={handleNavigate}>
   <TouchableOpacity style={styles.logoContainer}>
    <Image
      source={{uri:checkImageURL(job.employer_logo)
      ? job.employer_logo
      : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzo5H.jpg'
      }}
      resizeMode='contain'
      style={styles.logoImage} 
    />
   </TouchableOpacity>
    <Text style= {styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
    
    <View style={styles.infoContainer}>
      <Text style={styles.jobName(selectedJob,item)}  numberOfLines={1}>{item.job_title}</Text>
      <Text style={styles.location}>{item.job_country}</Text>
    </View>
   </TouchableOpacity>
  )
}

export default NearbyJobCard;