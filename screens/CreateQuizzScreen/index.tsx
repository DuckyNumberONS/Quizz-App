import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Layout from "../../components/layout";
import Input from "../../components/input";
import FormCreateQuizz from "../../components/form/formt-create-quizz";
import { useForm } from "react-hook-form";
import Select from "../../components/select";
import visibility from "../../src/config/visibility";
import { getListCollection } from "../../src/lib/api/collection";
import { Collection } from "../../src/lib/modal/collection";
import fakeData from "../../src/config/fakeData";
import { useSelector } from "react-redux";
import { user } from "../../src/lib/redux/selector/selector";
import ChooiseTypeQuestion from "../../components/popup/popupChooiseTypeQuestion";

interface PropsQuizz {
  urlThumbnail: string;
  title: string;
  description: string;
  idCollection: string;
  visibility: string;
  keyword: string;
}

const CreateQuizzScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dataUser = useSelector(user);
  const [collection, setCollection] = useState<Collection[]>([]);
  const [popup, setPopup] = useState(false);
  const selectCollecton = collection.map((items) => ({
    id: items._id,
    name: items.title,
    value: items._id,
  }));

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetch = async () => {
      const res = await getListCollection();
      setCollection(res);
    };
    fetch();
  }, []);

  const onSubmit = async (data: PropsQuizz) => {
    if (data) {
      setPopup(true);
    }
  };

  return (
    <Layout>
      <FormCreateQuizz
        title="Create Quizer 🙋"
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        titleButton="Add question"
        // theme={popup ? "#4d4d4d" : "white"}
      >
        <View className="mt-3">
          <Input
            label="urlThumbnail"
            name="urlThumbnail"
            type="text"
            errors={errors}
            placeholder="example urlThumbnail"
            errorsOption={{
              required: { value: true, message: "UrlThumbnail is empty" },
            }}
            classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
            classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
            control={control}
          />
        </View>
        <View className="mt-3">
          <Input
            label="Title"
            name="title"
            type="text"
            errors={errors}
            placeholder="example title"
            errorsOption={{
              required: { value: true, message: "Title is empty" },
              maxLength: {
                value: 50,
                message: "Title cannot exceed 50 number",
              },
              minLength: {
                value: 5,
                message: "Username must not be less than 5 char",
              },
            }}
            classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
            classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
            control={control}
          />
        </View>
        <View className="mt-3">
          <Input
            label="Description"
            name="description"
            type="text"
            errors={errors}
            placeholder="example description"
            errorsOption={{
              required: { value: true, message: "Description is empty" },
              maxLength: {
                value: 500,
                message: "Description cannot exceed 500 number",
              },
              minLength: {
                value: 16,
                message: "Description must not be less than 16 char",
              },
            }}
            classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
            classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
            control={control}
          />
        </View>
        <View className="mt-3">
          <Select
            options={selectCollecton ? selectCollecton : fakeData}
            placeholder="Choose Collection"
            name="idCollection"
            errors={errors}
            errorsOption={{
              required: { value: true, message: "Collection is empty" },
            }}
            classSelect="text-black bg-gray-50rounded-lg block w-full text-sm"
            control={control}
          />
        </View>
        <View className="mt-3">
          <Select
            options={visibility}
            placeholder="Choose visibility"
            name="visibility"
            errors={errors}
            errorsOption={{
              required: { value: true, message: "visibility is empty" },
            }}
            classSelect="text-black bg-gray-50rounded-lg block w-full text-sm"
            control={control}
          />
        </View>
        <View className="mt-3">
          <Input
            label="Keyword"
            name="keyword"
            type="text"
            errors={errors}
            placeholder="#example #keyword"
            errorsOption={{
              required: { value: true, message: "Keyword is empty" },
              pattern: {
                value: /#[^\s#]+/g,
                message: "You need to add '#' hashtags !",
              },
              maxLength: {
                value: 50,
                message: "Keyword cannot exceed 50 number",
              },
              minLength: {
                value: 2,
                message: "Keyword must not be less than 2 char",
              },
            }}
            classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
            classInput="text-[#1e7ae7] font-medium bg-gray-50rounded-lg block w-full text-sm"
            control={control}
          />
        </View>
      </FormCreateQuizz>
      {popup && <ChooiseTypeQuestion popups={popup} setPopups={setPopup} />}
    </Layout>
  );
};

export default CreateQuizzScreen;
