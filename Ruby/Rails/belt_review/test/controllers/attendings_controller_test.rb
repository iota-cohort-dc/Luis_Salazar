require 'test_helper'

class AttendingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get attendings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get attendings_destroy_url
    assert_response :success
  end

end
