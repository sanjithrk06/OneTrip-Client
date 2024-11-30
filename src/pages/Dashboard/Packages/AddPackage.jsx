import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Row,
  Col,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { TextArea } = Input;
const { Option } = Select;

const AddPackage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleSubmit = async (values) => {
    try {
      setIsSubmitting(true);

      // Create a FormData object for multipart/form-data upload
      const formData = new FormData();

      // Append all text fields
      formData.append("name", values.name);
      formData.append("location", JSON.stringify(values.location)); // still stringify if expecting array
      formData.append("nights", values.nights);
      formData.append("days", values.days);
      formData.append("tourType", values.tourType);
      formData.append("groupSize", values.groupSize);
      formData.append("languages", JSON.stringify(values.languages));
      formData.append("description", values.description);
      formData.append("price", values.price);

      // Append agenda as an array
      if (values.agenda && values.agenda.length > 0) {
        values.agenda.forEach((item, index) => {
          formData.append(`agenda[${index}][title]`, item.title);
          formData.append(`agenda[${index}][description]`, item.description);
        });
      }

      // Append image file if exists
      if (fileList.length > 0) {
        formData.append("image", fileList[0].originFileObj);
      }

      const response = await axios.post(
        "http://localhost:5001/api/package/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      message.success("Package created successfully!");
      // Uncomment the navigation if you want to redirect after successful creation
      navigate("/dashboard/packages");
    } catch (error) {
      console.error("Error creating package:", error.response?.data || error);
      message.error("Failed to create package. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = ({ fileList }) => {
    // Limit to a single file
    const latestFileList = fileList.slice(-1);
    setFileList(latestFileList);
  };

  return (
    <div style={{ padding: "20px" }} className="text-slate-900 font-medium">
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 className="font-bold text-2xl text-gray-800">Add Package</h1>
        <div className="flex gap-3">
          <Button size="medium" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button
            type="primary"
            size="medium"
            icon={<PlusOutlined />}
            onClick={() => form.submit()}
            loading={isSubmitting}
          >
            Add
          </Button>
        </div>
      </div>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* General Details - Same as before */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Package Name"
              name="name"
              rules={[{ required: true, message: "Please input the name!" }]}
            >
              <Input placeholder="Package Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Location"
              name="location"
              rules={[
                { required: true, message: "Please input the location(s)!" },
              ]}
            >
              <Select
                mode="tags"
                placeholder="Enter one or more locations"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={6}>
            <Form.Item
              label="Nights"
              name="nights"
              rules={[
                {
                  required: true,
                  message: "Please input the number of nights!",
                },
              ]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={6}>
            <Form.Item
              label="Days"
              name="days"
              rules={[
                { required: true, message: "Please input the number of days!" },
              ]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={6}>
            <Form.Item
              label="Tour Type"
              name="tourType"
              rules={[
                { required: true, message: "Please select a tour type!" },
              ]}
            >
              <Select placeholder="Tour Type">
                <Option value="Family Tour">Family Tour</Option>
                <Option value="Friends Tour">Friends Tour</Option>
                <Option value="Devotional Tour">Devotional Tour</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={6}>
            <Form.Item
              label="Group Size"
              name="groupSize"
              rules={[
                { required: true, message: "Please input the group size!" },
              ]}
            >
              <Input placeholder="E.g., Small, Medium, Large" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Languages"
              name="languages"
              rules={[
                { required: true, message: "Please input the languages!" },
              ]}
            >
              <Select
                mode="tags"
                placeholder="Languages spoken during the tour"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input the description!" },
              ]}
            >
              <TextArea rows={4} placeholder="Describe the package in detail" />
            </Form.Item>
          </Col>
        </Row>

        {/* Agenda - Same as before */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "16px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <Form.Item label="Agenda">
            <Form.List name="agenda">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <div key={key} style={{ marginBottom: "10px" }}>
                      <Row gutter={16}>
                        <Col xs={24} sm={10}>
                          <Form.Item
                            {...restField}
                            name={[name, "title"]}
                            label="Title"
                            rules={[
                              {
                                required: true,
                                message: "Please input the agenda title!",
                              },
                            ]}
                          >
                            <Input placeholder="Agenda Title" />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "description"]}
                            label="Description"
                            rules={[
                              {
                                required: true,
                                message: "Please input the agenda description!",
                              },
                            ]}
                          >
                            <TextArea rows={2} />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={2}>
                          <Button
                            danger
                            onClick={() => remove(name)}
                            style={{ marginTop: "32px" }}
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <Button type="dashed" onClick={() => add()}>
                    Add Agenda Item
                  </Button>
                </>
              )}
            </Form.List>
          </Form.Item>
        </div>

        {/* Price and Image */}
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please input the price!" }]}
            >
              <InputNumber style={{ width: "100%" }} min={1} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Image"
              name="images"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
              rules={[{ required: true, message: "Please upload an image!" }]}
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleFileChange}
                beforeUpload={() => false} // Prevent auto upload
                maxCount={1}
              >
                {fileList.length === 0 && (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddPackage;
