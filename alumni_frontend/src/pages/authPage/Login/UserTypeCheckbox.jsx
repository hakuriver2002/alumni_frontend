const UserTypeCheckbox = ({ onCheckboxChange, selectedUserType }) => {
	return (
		<div className='flex pt-2'>
			<div className='form-control flex-row space-x-24'>
				<label className={`label gap-2 cursor-pointer ${selectedUserType === "1" ? "selected" : ""} `}>
					<span className='text-black'>Admin</span>
					<input
						type='checkbox'
						className='w-5 h-5 rounded-full border-blue-3 accent-blue-1'
						checked={selectedUserType === "1"}
						onChange={() => onCheckboxChange("1")}
					/>
				</label>
                <label className={`label gap-2 cursor-pointer  ${selectedUserType === "0" ? "selected" : ""}`}>
                    <span className='text-black'>Alumni</span>
                    <input
                        type='checkbox'
                        className='w-5 h-5 rounded-full border-blue-3 accent-blue-1'
                        checked={selectedUserType === "0"}
                        onChange={() => onCheckboxChange("0")}
                    />
                </label>
			</div>
		</div>
	);
};
export default UserTypeCheckbox;