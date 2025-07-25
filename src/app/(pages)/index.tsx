import { Intro } from "@/components/widgets";
import { createIntro, selectData } from "@/lib/store/data";
import { setContextMenu, setModal } from "@/lib/store/modal";
import { Pressable, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  const menu = [
    {
      name: "New Intro",
      callback: () => {
        dispatch(
          setModal({
            active: true,
            data: { name: "" },
            required: { name: true },
            onSubmit: (newIntro) =>
              dispatch(createIntro({ ...newIntro, keys: [] }))
          })
        );
      }
    }
  ];

  return (
    <Pressable
      onLongPress={() => dispatch(setContextMenu({ active: true, menu }))}
      className="app flex-1"
    >
      <ScrollView className="p-4">
        {data.map((el: any, index: number) => (
          <Intro key={index} data={el} />
        ))}
      </ScrollView>
    </Pressable>
  );
}
