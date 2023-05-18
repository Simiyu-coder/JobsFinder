import { View, Text, TouchableOpacity,Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = () => {
  return (
   <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={() => handlePress (item)}
   >
     <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
        <Image
          source={{url:item.employer_logo}}
          resizeMode='contain'
          styles={styles.logoImage}
        />
     </TouchableOpacity>
   </TouchableOpacity>
  )
}

export default PopularJobCard