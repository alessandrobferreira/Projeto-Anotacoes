package br.com.projetosaula.anotacoes.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import br.com.projetosaula.anotacoes.data.dto.NotaDTO;

@Entity
public class NotaEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 20, nullable = false)
	private String titulo;
	
	@Column(length = 400)
	private String anotation;
	
	@ManyToOne
	@JoinColumn(name="id_categoria")
	private Categoria categoria;
	
	public NotaEntity() {}

	public NotaEntity(Integer id, String titulo, String anotation, Categoria categoria) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.anotation = anotation;
		this.categoria = categoria;
	}

	public NotaDTO getDTO() {
		return new NotaDTO(getId(), getTitulo(), getAnotation(), getCategoria().getDTO());
	}
	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAnotation() {
		return anotation;
	}

	public void setAnotation(String anotation) {
		this.anotation = anotation;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
	

}
