import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./nearbyjobcard.style";

const NearbyJobCard = (item) => {
  const router = useRouter();
  const job = item.item;
  const handleNavigate = () => {
    router.push(`/job-details/${job.job_id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
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
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={2}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
