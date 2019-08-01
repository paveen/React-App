import React from 'react';

const Dashboard = () => {
return (
<div className="Dashboard">
	<div className="bread">
		<ul className="breadcrumb">
			<li>Manage Accounts</li>
			<li>Sharda Group</li>
		</ul>
		<h3>Sharda Group</h3>
	</div>
	<div className="inner-section">
		<div className="inner-header">
			<h3>Add Institute</h3>
			<p>Enter the details of your new institute</p>
		</div>

    	<div className="form-section">
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="inputEmail4">Institute Name</label>
					<input type="text" class="form-control" placeholder="Sharda University"/>
				</div>
				<div class="form-group col-md-6">
					<label for="inputPassword4">Address</label>
					<input type="text" class="form-control" placeholder=""/>
				</div>
				<div class="form-group col-md-6">
					<label for="inputAddress">Town/Locality</label>
					<input type="text" class="form-control" placeholder=""/>
				</div>
				<div class="form-group col-md-6">
					<label for="inputState">City</label>
					<select id="inputState" class="form-control">
						<option selected>---Select---</option>
					</select>
				</div>
			</div>
			<hr/>
			<div class="form-row flex-dir">
					<h3>Department 01</h3>
					<div class="form-group col-md-6">
						<label for="inputEmail4">Institute Name</label>
						<input type="text" class="form-control" placeholder="Sharda University"/>
					</div>
			</div>
			<div className="flex-dir">
				<div className="btn-blue-text">
					+ Add Section
				</div>
				<button type="submit" class="btn btn-outline">+ create department</button>
			</div>
		</div>
	</div>

	<div className="btn-bottom">
			<button type="submit" class="btn btn-gray">Back</button>
			<button type="submit" class="btn btn-orange">Save</button>
		</div>
</div>
)}
export default Dashboard;