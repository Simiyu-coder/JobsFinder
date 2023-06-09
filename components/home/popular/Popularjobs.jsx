import { useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch';


import styles from './popularjobs.style';
import { COLORS,SIZES} from '../../../constants';
import  PopularjobsCard  from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading,error } = useFetch('search', {
  query: 'Python developer in Texas, USA',
  num_pages: '1'
})

const  [ selectedJob, setSelectedJob] = useState();
const handlePress = (item) => {

}

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle }>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
    </View>

    <View style = {styles.cardsContainer}>
      {isLoading? (
       < ActivityIndicator size="large" colors={COLORS.primary}/>
      ) 
      : error?(
       <Text>Something is wrong!</Text> ) 
       : (
        <FlatList
          data={ [1,2,3,4,5] }
          renderItem={ ( {item}) => (
            <PopularjobsCard
              item={item}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
        />
      )}
    </View>
    </View>
  )
}

export default Popularjobs;