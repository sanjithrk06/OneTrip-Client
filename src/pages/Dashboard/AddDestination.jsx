import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Checkbox,
  Upload,
  Row,
  Col,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const AddDestination = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [galleryImages, setGalleryImages] = useState([]);

  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    // Add your API request here to save the data
  };

  const handleGalleryChange = ({ fileList }) => {
    setGalleryImages(fileList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 className="font-semibold text-2xl">Add Destination</h1>
        <div className="flex gap-3">
          <Button onClick={() => navigate(-1)}>Cancel</Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => form.submit()}
          >
            Add
          </Button>
        </div>
      </div>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Left Side - ID, Title, Subtitle */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={15}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label="Destination ID"
                    name="destinationId"
                    initialValue="OTD"
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={16}>
                  <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                      { required: true, message: "Please input the title!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Subtitle" name="subTitle">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="About"
                    name="about"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the description!",
                      },
                    ]}
                  >
                    <TextArea rows={4} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Right Side - Cover Picture and Gallery */}
          <Col xs={24} sm={9}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <Form.Item
                label="Cover Picture"
                name="coverPicture"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                  { required: true, message: "Please upload a cover picture!" },
                ]}
                style={{ width: "100%" }}
              >
                <Upload
                  action="/upload.do"
                  listType="picture-card"
                  maxCount={1}
                  style={{ width: "100%" }}
                >
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
              </Form.Item>

              <Form.Item label="Gallery Images">
                <Upload
                  listType="picture-card"
                  multiple
                  beforeUpload={() => false}
                  fileList={galleryImages}
                  onChange={handleGalleryChange}
                >
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
              </Form.Item>
            </div>
          </Col>
        </Row>

        {/* Stays Section */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "16px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <Form.Item label="Stays">
            <Form.List name="stays">
              {(fields, { add, remove }) => (
                <>
                  <Row gutter={[16, 16]}>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Col key={key} xs={24} sm={12} md={8}>
                        <div
                          style={{
                            padding: "16px",
                            border: "1px solid #d9d9d9",
                            borderRadius: "4px",
                          }}
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "name"]}
                            label="Stay Name"
                            rules={[
                              {
                                required: true,
                                message: "Please input stay name!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>

                          <Form.Item
                            {...restField}
                            name={[name, "price"]}
                            label="Price"
                          >
                            <Input />
                          </Form.Item>

                          <Row gutter={8}>
                            <Col span={12}>
                              <Form.Item
                                {...restField}
                                name={[name, "beds"]}
                                label="Beds"
                              >
                                <InputNumber style={{ width: "100%" }} />
                              </Form.Item>
                            </Col>
                            <Col span={12}>
                              <Form.Item
                                {...restField}
                                name={[name, "baths"]}
                                label="Baths"
                              >
                                <InputNumber style={{ width: "100%" }} />
                              </Form.Item>
                            </Col>
                          </Row>

                          <div className=" flex flex-row justify-between">
                            <Form.Item
                              {...restField}
                              name={[name, "wifi"]}
                              valuePropName="checked"
                            >
                              <Checkbox>WiFi</Checkbox>
                            </Form.Item>
                            <Button
                              onClick={() => remove(name)}
                              type="dashed"
                              danger
                            >
                              Remove Stay
                            </Button>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: "100%", marginTop: "10px" }}
                  >
                    Add Stay
                  </Button>
                </>
              )}
            </Form.List>
          </Form.Item>
        </div>

        {/* Spots Section */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "16px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <Form.Item label="Spots">
            <Form.List name="spots">
              {(fields, { add, remove }) => (
                <>
                  <Row gutter={[16, 16]}>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Col key={key} xs={24} sm={12} md={8}>
                        <div
                          style={{
                            padding: "8px",
                            border: "1px solid #d9d9d9",
                            borderRadius: "4px",
                          }}
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "title"]}
                            label="Spot Title"
                            rules={[
                              {
                                required: true,
                                message: "Please input spot title!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "imgSrc"]}
                            label="Image URL"
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "location"]}
                            label="Location"
                          >
                            <Input />
                          </Form.Item>
                          <Button
                            onClick={() => remove(name)}
                            type="dashed"
                            danger
                          >
                            Remove Spot
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: "100%", marginTop: "10px" }}
                  >
                    Add Spot
                  </Button>
                </>
              )}
            </Form.List>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddDestination;
