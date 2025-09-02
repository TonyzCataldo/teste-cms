import { createUsePuck } from "@measured/puck";
const usePuck = createUsePuck();
const UpdateRoot = ({ prop, name }) => {
  const data = usePuck((s) => s.appState.data);
  const dispatch = usePuck((s) => s.dispatch);
  const value = data.root?.props?.[prop] ?? "";

  function set(e) {
    dispatch({
      type: "setData",
      data: {
        ...data,
        root: {
          ...(data.root ?? {}),
          props: { ...(data.root?.props ?? {}), [prop]: e.target.value },
        },
      },
    });
  }
  return (
    <input
      type="text"
      value={value}
      onChange={set}
      placeholder={name}
      className="bg-white  w-full placeholder:text-[var(--txt)] rounded-md border font-sans text-[var(--txt)] focus:border-green-500 border-gray-700 outline-0  p-3"
    ></input>
  );
};
export default UpdateRoot;
