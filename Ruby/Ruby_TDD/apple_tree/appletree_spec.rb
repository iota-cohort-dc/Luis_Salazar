require_relative 'appletree'
RSpec.describe Appletree do
	before(:each) do 
		@tree1 = Appletree.new
	end
	it 'change height fail' do
		expect{@tree1.height = 2}.to raise_error(NoMethodError)
	end  
	it 'change appple count fail' do
		expect{@tree1.apples = 2}.to raise_error(NoMethodError)
	end  
  it 'has a getter and setter for age attribute' do
    @tree1.age = 100
    expect(@tree1.age).to eq(100)
  end 
  it 'testing for years go by, age' do
  	@tree1.year_gone_by
    expect(@tree1.age).to eq(1)
  end 
  it 'testing for years go by, height' do
  	@tree1.year_gone_by
    expect(@tree1.height).to eq(1.1)
  end 
  it 'testing for years go by, apples' do
  	@tree1.year_gone_by
    expect(@tree1.apples).to eq(0)
  end 
    it 'testing if apples grow after 3 years' do
  	4.times{@tree1.year_gone_by}
    expect(@tree1.apples).to eq(2)
  end 
     it 'testing if apples grow after 3 years' do
	15.times{@tree1.year_gone_by}
    expect(@tree1.apples).to eq(14)
  end 
    it 'testing if apples grow after 3 years' do
	15.times{@tree1.year_gone_by}
  	@tree1.pick_apples
    expect(@tree1.apples).to eq(0)
  end 

end
