import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./popularjobcard.style";
import { useRouter } from "expo-router";

const PopularJobCard = (item, selectedJob, setSelectedJob) => {
  const router = useRouter();
  const job = item.item.item;

  const handleCardPress = (item) => {
    router.push(`/job-details/${job.job_id}`);
    setSelectedJob(job.job_id);
  };
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={handleCardPress}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          style={styles.logoImage}
          source={{
            uri:
              job.employer_logo === "" || job.employer_logo === null
                ? "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                : job.employer_logo,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {job.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={2}>
          {job.job_title}
        </Text>
        <Text style={styles.location}>{job.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
