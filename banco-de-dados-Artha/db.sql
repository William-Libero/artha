CREATE TABLE `usuario` (
  `id_usuario` int(4) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `sobrenome` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `cpf` varchar(14) COLLATE latin1_general_ci DEFAULT NULL,
  `rg` varchar(14) COLLATE latin1_general_ci DEFAULT NULL,
  `dt_nasc` varchar(10) COLLATE latin1_general_ci DEFAULT NULL,
  `telefone` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `endereco` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `endereco_numero` varchar(8) COLLATE latin1_general_ci DEFAULT NULL,
  `complemento` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `bairro` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `cidade` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `estado_uf` varchar(2) COLLATE latin1_general_ci DEFAULT NULL,
  `cep` varchar(9) COLLATE latin1_general_ci DEFAULT NULL,
  `nome_contato` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `telefone_contato` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `senha` char(32) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

CREATE TABLE `medico` (
  `id_medico` int(4) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `sobrenome` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `cpf` varchar(14) COLLATE latin1_general_ci DEFAULT NULL,
  `rg` varchar(14) COLLATE latin1_general_ci DEFAULT NULL,
  `dt_nasc` varchar(10) COLLATE latin1_general_ci DEFAULT NULL,
  `telefone` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `crm` varchar(14) COLLATE latin1_general_ci DEFAULT NULL,
  `ft_rg` varchar(14) COLLATE latin1_general_ci DEFAULT NULL,
  `ft_crm` varchar(14) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `endereco` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `endereco_numero` varchar(8) COLLATE latin1_general_ci DEFAULT NULL,
  `complemento` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `bairro` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `cidade` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `estado_uf` varchar(2) COLLATE latin1_general_ci DEFAULT NULL,
  `cep` varchar(9) COLLATE latin1_general_ci DEFAULT NULL,
  `senha` char(32) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_medico`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

CREATE TABLE `vinculacao_user_doctor` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(4) NOT NULL,
  `id_medico` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;