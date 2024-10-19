/* eslint-disable react/prop-types */

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <div className="w-2/4 border p-6 mb-6 rounded">
      <h3 className="text-xl my-4 font-bold">{title}</h3>

      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          onClick={onShow}
          className="bg-black py-2 mt-4 px-8 text-white rounded"
        >
          Show
        </button>
      )}
    </div>
  );
};

export default Panel;
