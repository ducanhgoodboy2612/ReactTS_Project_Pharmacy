import { Flex, Modal } from "antd";
import { useEffect, useState } from "react";
import { Emp_Delete } from "../../services/emp.services";
const EmpDelete = (props: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        //alert("prop id : " + props.prodid);
        await Emp_Delete(props.empid);
        props.fetchData();
        setIsModalOpen(false);
        props.handleCancelDelete();
        alert("Xóa thành công!");
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        props.handleCancelDelete();
    };
    useEffect(() => {
        showModal();
    }, []);

    return (
        <>
            <Modal
                title="Xóa sản phẩm"
                open={isModalOpen}
                cancelText={"Hủy bỏ"}
                okText={"Xóa"}
                width={"40vw"}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={(child) => {
                    return (
                        <>
                            <hr
                                style={{
                                    color: "#F8F3F3",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                }}
                            />
                            <Flex justify={"flex-end"} align="center" gap={8}>
                                {child}
                            </Flex>
                        </>
                    );
                }}
            >
                <div>Bạn có muốn xóa nhân viên này không?</div>
            </Modal>
        </>
    );
};
export default EmpDelete;
